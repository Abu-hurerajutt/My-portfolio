document.addEventListener("DOMContentLoaded", () => {
    const productName = document.getElementById("productName");
    const category = document.getElementById("category");
    const purchasePrice = document.getElementById("purchasePrice");
    const salePrice = document.getElementById("salePrice");
    const addProductBtn = document.getElementById("addProduct");
  
    const productTable = document.querySelector("#productTable tbody");
    const searchName = document.getElementById("searchName");
    const searchCategory = document.getElementById("searchCategory");
  
    const totalItemsSoldEl = document.getElementById("totalItemsSold");
    const totalPurchaseEl = document.getElementById("totalPurchase");
    const totalSaleEl = document.getElementById("totalSale");
    const totalProfitEl = document.getElementById("totalProfit");
  
    let products = JSON.parse(localStorage.getItem("products")) || [];
  
    function renderTable(filteredProducts = products) {
      productTable.innerHTML = "";
      filteredProducts.forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>${product.purchasePrice}</td>
          <td>${product.salePrice}</td>
          <td><input type="number" min="0" value="${product.sold}" data-index="${index}" class="sold-input" /></td>
          <td>${product.purchaseTotal}</td>
          <td>${product.saleTotal}</td>
          <td>${product.profit}</td>
          <td><button class="remove" data-index="${index}">Remove</button></td>
        `;
        productTable.appendChild(row);
      });
      updateSummary();
    }
  
    function updateSummary() {
      let totalItemsSold = 0, totalPurchase = 0, totalSale = 0, totalProfit = 0;
      products.forEach(product => {
        totalItemsSold += product.sold;
        totalPurchase += product.purchaseTotal;
        totalSale += product.saleTotal;
        totalProfit += product.profit;
      });
      totalItemsSoldEl.textContent = totalItemsSold;
      totalPurchaseEl.textContent = totalPurchase;
      totalSaleEl.textContent = totalSale;
      totalProfitEl.textContent = totalProfit;
    }
  
    addProductBtn.addEventListener("click", () => {
      const product = {
        name: productName.value,
        category: category.value,
        purchasePrice: +purchasePrice.value,
        salePrice: +salePrice.value,
        sold: 0,
        purchaseTotal: 0,
        saleTotal: 0,
        profit: 0,
      };
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
      renderTable();
    });
  
    productTable.addEventListener("input", (e) => {
      if (e.target.classList.contains("sold-input")) {
        const index = e.target.dataset.index;
        const sold = +e.target.value;
        const product = products[index];
        product.sold = sold;
        product.purchaseTotal = sold * product.purchasePrice;
        product.saleTotal = sold * product.salePrice;
        product.profit = product.saleTotal - product.purchaseTotal;
        localStorage.setItem("products", JSON.stringify(products));
        renderTable();
      }
    });
  
    productTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        const index = e.target.dataset.index;
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderTable();
      }
    });
  
    searchName.addEventListener("input", () => {
      const query = searchName.value.toLowerCase();
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
      );
      renderTable(filteredProducts);
    });
  
    searchCategory.addEventListener("input", () => {
      const query = searchCategory.value.toLowerCase();
      const filteredProducts = products.filter(product =>
        product.category.toLowerCase().includes(query)
      );
      renderTable(filteredProducts);
    });
  
    document.getElementById("generatePdf").addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
      
        // Main Heading (h2)
        doc.setFontSize(22);
        doc.text("Shop Daily Report", 10, 20);
      
        // Subheadings (h3) with bold values
        doc.setFontSize(16);
        doc.text(`Total Profit: `, 10, 40);
        doc.setFontSize(14);
        doc.text(`${totalProfitEl.textContent}`, 70, 40, { align: "left" });
      
        doc.setFontSize(16);
        doc.text(`Total Purchase: `, 10, 50);
        doc.setFontSize(14);
        doc.text(`${totalPurchaseEl.textContent}`, 70, 50, { align: "left" });
      
        doc.setFontSize(16);
        doc.text(`Total Sale: `, 10, 60);
        doc.setFontSize(14);
        doc.text(`${totalSaleEl.textContent}`, 70, 60, { align: "left" });
      
        doc.setFontSize(16);
        doc.text(`Total Items Sold: `, 10, 70);
        doc.setFontSize(14);
        doc.text(`${totalItemsSoldEl.textContent}`, 70, 70, { align: "left" });
      
        // Category-wise summary table
        let yPosition = 90;
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.setFillColor(135, 206, 250); // Sky blue background
        doc.rect(10, yPosition, 190, 10, "F");
        doc.text("Category", 15, yPosition + 7);
        doc.text("Total Purchase", 60, yPosition + 7);
        doc.text("Total Sale", 110, yPosition + 7);
        doc.text("Total Profit", 160, yPosition + 7);
      
        yPosition += 15;
      
        const categorySummary = summarizeByCategory();
        categorySummary.forEach((summary) => {
          doc.setFont("helvetica", "normal");
          doc.text(summary.category, 15, yPosition);
          doc.text(String(summary.totalPurchase), 60, yPosition);
          doc.text(String(summary.totalSale), 110, yPosition);
          doc.text(String(summary.totalProfit), 160, yPosition);
          yPosition += 10;
        });
      
        // Detailed Products Table
        yPosition += 10;
        doc.setFont("helvetica", "bold");
        doc.setFillColor(135, 206, 250); // Sky blue background
        doc.rect(10, yPosition, 190, 10, "F");
        doc.text("Product Name", 15, yPosition + 7);
        doc.text("Category", 60, yPosition + 7);
        doc.text("Sold Quantity", 110, yPosition + 7);
        doc.text("Profit", 160, yPosition + 7);
      
        yPosition += 15;
      
        products.forEach((product) => {
          doc.setFont("helvetica", "normal");
          doc.text(product.name, 15, yPosition);
          doc.text(product.category, 60, yPosition);
          doc.text(String(product.sold), 110, yPosition);
          doc.text(String(product.profit), 160, yPosition);
          yPosition += 10;
        });
      
        // Save the PDF
        doc.save("shop-report.pdf");
      });
      
      // Helper function to summarize products by category
      function summarizeByCategory() {
        const categoryMap = {};
      
        products.forEach((product) => {
          if (!categoryMap[product.category]) {
            categoryMap[product.category] = {
              totalPurchase: 0,
              totalSale: 0,
              totalProfit: 0,
              category: product.category,
            };
          }
          categoryMap[product.category].totalPurchase += product.purchaseTotal;
          categoryMap[product.category].totalSale += product.saleTotal;
          categoryMap[product.category].totalProfit += product.profit;
        });
      
        return Object.values(categoryMap);
      }
      
  
    document.getElementById("resetDashboard").addEventListener("click", () => {
      products.forEach(product => {
        product.sold = 0;
        product.purchaseTotal = 0;
        product.saleTotal = 0;
        product.profit = 0;
      });
      localStorage.setItem("products", JSON.stringify(products));
      renderTable();
    });
  
    renderTable();
  });
  