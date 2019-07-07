<template lang="pug">
  section#about(
    class="container mx-auto px-1 py-3"
  )
    //- 自我介紹表格
    table.intro
      thead
        tr
          td(colspan="4")
            strong(class="block text-center") 自我介紹(履歷)
      tbody
        template(v-for="(row, index) in introTable")
          tr(:key="index")
            template(v-for="(col, key) in row")
              td(
                :key="key"
                :rowspan="col.rowspan ? col.rowspan : 1"
                :colspan="col.colspan ? col.colspan : 1"
                :style="col.style"
                v-html="col.content"
              )
    p(
      class="text-left mx-auto my-3"
    )
      | 這裡是我的個人網站，記錄著我學習前端的點點滴滴！
      br
      | 學習範圍如下：
    //- 技能表格
    table.skillTable
      thead
        tr
          td
            strong(class="block text-center") 項目
          td
            strong(class="block text-center") 名稱
          td
            strong(class="block text-center") 用途
      tbody
        template(v-for="(row, index) in skillTable")
          tr(:key="index")
            template(v-for="(col, key) in row")
              td(
                :key="key"
                :rowspan="col.rowspan ? col.rowspan : 1"
                :colspan="col.colspan ? col.colspan : 1"
                :style="col.style"
                v-html="col.content"
              )
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      introTable: [
        [
          { content: "姓名" },
          { content: "陳韋呈" },
          { content: "性別" },
          { content: "男", style: { "text-align": "center" } }
        ],
        [
          { content: "生日" },
          { content: "84.07.17" },
          { content: "居住城市" },
          { content: "台中市", style: { "text-align": "center" } }
        ],
        [
          { content: "工作經歷" },
          {
            colspan: 3,
            content:
              "誠智數位有限公司擔任 <strong>前端工程師</strong>(2018.05~)"
          }
        ],
        [
          { rowspan: 2, content: "學歷" },
          {
            colspan: 3,
            content: "國立雲林科技大學資訊工程系(2013.08 ~ 2017.06)"
          }
        ],
        [
          {
            colspan: 3,
            content: "國立台中高級工業職業學校電子科(2010.08 ~ 2013.06)"
          }
        ],
        [
          { rowspan: 2, content: "打工經歷" },
          { colspan: 3, content: "建立畢業生聯誼會社團網站 (wordpress)" }
        ],
        [{ colspan: 3, content: "建立學校處室單位網站 (wordpress)" }],
        [
          { rowspan: 2, content: "社團經歷" },
          { colspan: 3, content: "雲科大溜冰社副社長 (2015.08 ~ 2016.07)" }
        ],
        [{ colspan: 3, content: "雲科大溜冰社資訊長 (2014.08 ~ 2015.07)" }]
      ],
      skillTable: [
        [
          { content: "網頁3大要素" },
          { content: "HTML<br>CSS<br>JavaScript" },
          { content: "" }
        ],
        [
          { content: "排版框架<br>CSS Framework" },
          { content: "Bootstrap<br>Tailwindcss<br>Onsen UI<br>Framework7" },
          {
            content: `
              <ul>
                <li>快速排版</li>
                <li>響應式設計</li>
                <li>製作類似手機原生樣式的元件</li>
              </ul>
            `
          }
        ],
        [
          { content: "前端框架" },
          {
            content: "Vue"
          },
          {
            content: `
              <ul>
                <li>模板元件化</li>
                <li>製作 SPA 架構的網頁</li>
                <li>使用狀態管理工具 Vuex 、路由器 Router 製作專案</li>
              </ul>
            `
          }
        ],
        [
          { content: "版本控制" },
          { content: "git" },
          {
            content: `
              <ul>
                <li>用於版本控制</li>
                <li>與其他人同時協作開發</li>
                <li>了解 git flow 運作方式</li>
              </ul>
            `
          }
        ],
        [
          { rowspan: 3, content: "其他" },
          { content: "Node js" },
          {
            content: `
              <ul>
                <li>前端開發環境(Gulp、Webpack)</li>
                <li>使用 Vue-cli、create-react-app 等命令列建立專案環境</li>
                <li>製作 Line-Bot 爬蟲機器人(天氣資料)</li>
                <li>使用 Webduino 製作網頁與開發電路板的連動操作</li>
              </ul>
            `
          }
        ],
        [
          { content: "python" },
          {
            content: `
              <ul>
                <li>製作 Line-Bot 爬蟲機器人(天氣資料)</li>
              </ul>
            `
          }
        ],
        [
          { content: "Wordpress" },
          { content: "使用後台建置網頁，供管理者方便維護、更新網站" }
        ]
      ]
    };
  }
};
</script>

<style lang="scss">
#about {
  ul {
    list-style: decimal;
    padding-left: 1rem;
  }
  table {
    width: 100%;
    font-size: 0.8rem;
    background-color: lighten($color-gray-light, 70%);
    thead {
      background-color: $color-active;
      color: #fff;
    }
    tr:nth-child(odd) {
      background-color: lighten($color-gray-light, 30%);
    }
    thead > td {
      border: 1px solid #000;
      text-align: center;
      padding: 10px 5px;
    }
    tr > td {
      // min-width: 110px;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      padding: 10px 5px;
      &:first-child {
        width: 80px;
        border-left: 1px solid #000;
      }
      &:not(:last-child) {
        // white-space: nowrap;
        text-align: center;
      }
      &:last-child {
        text-align: left;
        ol {
          padding-left: 20px;
        }
      }
    }
    &.intro > tr > td {
      min-width: calc(100% / 4);
    }
  }
}
</style>
