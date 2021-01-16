import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    //将app销毁 同时Dialog也销毁了
    app.unmount(div)
    //div也remove掉
    div.remove()
  }
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true, 'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            close()
          }
        }, ok, cancel
      },
        // 传插槽
        {
          title, content
        })
    }
  })
  app.mount(div)
}