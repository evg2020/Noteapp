import Vue from "vue";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "element-ui/packages/theme-chalk/lib/index.css";
import {
  Button,
  Card,
  Input,
  Form,
  FormItem,
  Select,
  Option,
  Alert,

} from "element-ui";

const elements = [
  Button,
  Card,
  Input,
  Form,
  FormItem,
  Select,
  Option,
  Alert,
];
locale.use(lang);
elements.forEach(E1 => Vue.use(E1, {locale}));