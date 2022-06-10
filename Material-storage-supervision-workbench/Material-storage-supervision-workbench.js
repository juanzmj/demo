new Vue({
    el: "#app",
    data: function () {
      return {
        reverse: true,
        customColor: "#00BB7A",
        goodsData: [
          {
            goodsNum: 1,
            goodsName: "救灾物资",
            quantity: 15465,
          },
          {
            goodsNum: 2,
            goodsName: "防汛物资",
            quantity: 9564,
          },
          {
            goodsNum: 3,
            goodsName: "危化事故装备",
            quantity: 2563,
          },
          {
            goodsNum: 4,
            goodsName: "森防物资装备",
            quantity: 2523,
          },
          {
            goodsNum: 5,
            goodsName: "火灾事故装备",
            quantity: 1452,
          },
          {
            goodsNum: 6,
            goodsName: "抢险救援物资",
            // progress: 33,
            quantity: 958,
          },
          // {
          //   goodsNum: 7,
          //   goodsName: "储存物资名称",
          //   quantity:652
          // },
          // {
          //   goodsNum: 8,
          //   goodsName: "储存物资名称",
          //   quantity:586
          // },
        ],
      };
    },

    methods: {
      filterData(val) {
        //百分比必须为0-100，否则报错[Vue warn]:Invalid prop:custom validator check failed for prop "percentage"
        let result = 0
        result = val / 100 > 100 ? 100 : val / 100;
        return result
      },
      
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 === 0) {
          return "warning-row";
        } else if (rowIndex % 2 === 1) {
          return "success-row";
        }
      },
      cellstyle({ row, column, rowIndex, columnIndex }) {
        var style = {
          color: "#101010",
          "font-size": "14px",
          "text-align": "left",
          "font-family": "SourceHanSansSC-regular",
          "font-weight": "bold",
        };
        var style1 = {
          color: "#F06767",
          "font-size": "14px",
          "font-weight": "bold",
        };
        var style2 = {
          color: "#FF9502",
          "font-size": "14px",
          "font-weight": "bold",
        };
        var style3 = {
          color: "#02C372",
          "font-size": "14px",
          "font-weight": "bold",
        };
        var style4 = {
          color: "#101010",
          "font-size": "14px",
          "font-weight": "bold",
        };

        if (columnIndex === 1) return style;
        if (rowIndex === 0) return style1;
        if (rowIndex === 1) return style2;
        if (rowIndex === 2) return style3;
        return style4;
      },
    },
  });