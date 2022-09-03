import AvatarComponent from './avatar/Avatar.svelte';
import Dialog from './dialog/Dialog.svelte';
import Leo from './avatar/Leo.svelte';
import Lauren from './avatar/Lauren.svelte';
import Tim from './avatar/Tim.svelte';
import Nikita from './avatar/Nikita.svelte';
import Alert from './alert/Alert.svelte';
import Backdrop from './backdrop/Backdrop.svelte';
import Checkbox from './checkbox/Checkbox.svelte';
import Button from './button/Button.svelte';
import Dropdown from './dropdown/Dropdown.svelte';
import Input from './input/Input.svelte';
import Progress from './progress/Progress.svelte';
import Radio from './radio/Radio.svelte';
import Spinner from './spinner/Spinner.svelte';
import Tag from './tag/Tag.svelte';
import * as toaster from './toast/toaster';
import ToastProvider from './toast/ToastProvider.svelte';
import FormItem from './form-item/FormItem.svelte';

const Avatar = Object.assign(AvatarComponent, {
    Leo,
    Nikita,
    Lauren,
    Tim
});

export {
    Avatar,
    Alert,
    Backdrop,
    Checkbox,
    Button,
    Dialog,
    Dropdown,
    Input,
    Progress,
    Radio,
    Spinner,
    Tag,
    toaster,
    ToastProvider,
    FormItem
};