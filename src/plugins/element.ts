import {
  ElTable,
  ElTableColumn,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElScrollbar,
} from 'element-plus';
import { App } from 'vue';

const components = [
  ElTable,
  ElTableColumn,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElScrollbar,
];

const plugins = [ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox, ElNotification];

export default function elementCreator(app: App):void {
  components.forEach((component) => {
    app.component(component.name, component);
  });
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}
