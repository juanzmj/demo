new Vue({
    el: "#app",
    data: function () {
      return {
        dialogVisible: true,
        tableData: [
          {
            goodsType: "应急物资",
            goodsName: "应急物资",
            model: "QBZ-001",
            address: "江苏建圆建方工程管理咨询有限公司",
            purchaseNum: "1000",
            budgetUnitPrice: "1.00",
            budgetSumPrice: "1000.00",
            budgetNum: "1000",
            unitPrice: "1.00",
            discount: "无",
            sumPrice: "1000.00",
            progress: "100%",
          },
          {
            goodsType: "应急物资",
            goodsName: "应急物资",
            model: "QBZ-001",
            address: "江苏建圆建方工程管理咨询有限公司",
            purchaseNum: "1000",
            budgetUnitPrice: "1.00",
            budgetSumPrice: "1000.00",
            budgetNum: "1000",
            unitPrice: "1.00",
            discount: "无",
            sumPrice: "1000.00",
            progress: "100%",
          },
          {
            goodsType: "应急物资",
            goodsName: "应急物资",
            model: "QBZ-001",
            address: "江苏建圆建方工程管理咨询有限公司",
            purchaseNum: "1000",
            budgetUnitPrice: "1.00",
            budgetSumPrice: "1000.00",
            budgetNum: "1000",
            unitPrice: "1.00",
            discount: "无",
            sumPrice: "1000.00",
            progress: "100%",
          },
        ],
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = "总价";
            return;
          }
          const values = data.map((item) => Number(item[column.property]));
          if (index === 10) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += " 元";
          } else {
            sums[index] = "";
          }
        });

        return sums;
      },
    },
  });