import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from '@/components/welcome.vue'
import PdfView from '@/components/pdf.vue'
import listData from '@utils/const.ts';

const routes = ([{ path: '/', component: Welcome }]).concat(listData.pdfList.map((item: any) => ({
  path: item.path,
  component: PdfView,
  meta: {
    pdfPath: item.pdfPath,
    text: item.text
  }
})))

// const routes = [
//   { path: '/', component: Welcome },
//   {
//     path: '/one-one-one',
//     component: PdfView
//   },{
//     path: '/one-one-two',
//     component: PdfView
//   }
// ]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;