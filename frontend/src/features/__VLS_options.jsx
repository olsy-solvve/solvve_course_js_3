import axios from "axios";

export default (await import('vue')).defineComponent({
name: "App",
data() {
return {
items: [],
totalItemsCount: 0,
offset: 20,
};
},

created() {
const root = "https://swapi.dev/api/people/";
axios.get(root, {}, {}).then((res) => {
Object.entries(res.data.results).forEach(([, value]) => {
this.totalItemsCount = res.data.count;
this.items.push(value);

this.key = key;


});
});
},
methods: {
onPage(event) {
const root = `https://swapi.dev/api/people/?page=${event.page + 1}`;
axios.get(root, {}, {}).then((res) => {
this.items = [];
Object.entries(res.data.results).forEach(([, value]) => {
this.totalItemsCount = res.data.count;
this.items.push(value);

this.key = key;


});
});
},
},
});
const __VLS_options = {
...({
name: "App",
data() {
return {
items: [],
totalItemsCount: 0,
offset: 20,
};
},

created() {
const root = "https://swapi.dev/api/people/";
axios.get(root, {}, {}).then((res) => {
Object.entries(res.data.results).forEach(([, value]) => {
this.totalItemsCount = res.data.count;
this.items.push(value);

this.key = key;


});
});
},
methods: {
onPage(event) {
const root = `https://swapi.dev/api/people/?page=${event.page + 1}`;
axios.get(root, {}, {}).then((res) => {
this.items = [];
Object.entries(res.data.results).forEach(([, value]) => {
this.totalItemsCount = res.data.count;
this.items.push(value);

this.key = key;


});
});
},
},
}),
};
const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
name: "App",
data() {
return {
items: [],
totalItemsCount: 0,
offset: 20,
};
},

created() {
const root = "https://swapi.dev/api/people/";
axios.get(root, {}, {}).then((res) => {
Object.entries(res.data.results).forEach(([, value]) => {
this.totalItemsCount = res.data.count;
this.items.push(value);

this.key = key;


});
});
},
methods: {
onPage(event) {
const root = `https://swapi.dev/api/people/?page=${event.page + 1}`;
axios.get(root, {}, {}).then((res) => {
this.items = [];
Object.entries(res.data.results).forEach(([, value]) => {
this.totalItemsCount = res.data.count;
this.items.push(value);

this.key = key;


});
});
},
},
} as const);
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js'; import('./__VLS_types.js');
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components['/* __VLS_.SearchTexts.Components */'];
({} as __VLS_types.GlobalAttrs)['/* __VLS_.SearchTexts.GlobalAttrs */'];
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
declare const DataView: __VLS_types.ConvertInvalidJsxElement<
'DataView' extends keyof typeof __VLS_components ? typeof __VLS_components['DataView'] : 'DataView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['DataView'] : unknown>;
__VLS_components.DataView;
__VLS_components.DataView;
__VLS_ctx.DataView;
__VLS_ctx.DataView;
declare const __VLS_0: __VLS_types.ExtractEmit2<typeof DataView>;
/* Completion: Emits */
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.DataView */');
/* Completion: Props */
// @ts-ignore
(<DataView /* __VLS_.SearchTexts.Completion.Props.DataView */ />);
declare const Panel: __VLS_types.ConvertInvalidJsxElement<
'Panel' extends keyof typeof __VLS_components ? typeof __VLS_components['Panel'] : 'Panel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['Panel'] : unknown>;
__VLS_components.Panel;
__VLS_components.Panel;
__VLS_ctx.Panel;
__VLS_ctx.Panel;
declare const __VLS_1: __VLS_types.ExtractEmit2<typeof Panel>;
/* Completion: Emits */
// @ts-ignore
__VLS_1('/* __VLS_.SearchTexts.Completion.Emit.Panel */');
/* Completion: Props */
// @ts-ignore
(<Panel /* __VLS_.SearchTexts.Completion.Props.Panel */ />);
declare const PaginatorVue: __VLS_types.ConvertInvalidJsxElement<
'PaginatorVue' extends keyof typeof __VLS_components ? typeof __VLS_components['PaginatorVue'] : 'PaginatorVue' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['PaginatorVue'] : unknown>;
__VLS_components.PaginatorVue;
__VLS_components.PaginatorVue;
__VLS_ctx.PaginatorVue;
__VLS_ctx.PaginatorVue;
declare const __VLS_2: __VLS_types.ExtractEmit2<typeof PaginatorVue>;
/* Completion: Emits */
// @ts-ignore
__VLS_2('/* __VLS_.SearchTexts.Completion.Emit.PaginatorVue */');
/* Completion: Props */
// @ts-ignore
(<PaginatorVue /* __VLS_.SearchTexts.Completion.Props.PaginatorVue */ />);
{
<div></div>;

{
<DataView value={(__VLS_ctx.items)} layout={"\u0067\u0072\u0069\u0064"}></DataView>;

[items,];
{
<template></template>;

const __VLS_5 = new DataView({ value: ((__VLS_ctx.items)), layout: ("\u0067\u0072\u0069\u0064"), });
[items,];
declare const __VLS_6: __VLS_types.ExtractComponentSlots<typeof __VLS_5>;
const slotProps = __VLS_6['list'];
{
<div class={"\u0070\u002d\u0063\u006f\u006c\u002d\u0031\u0032"}></div>;

{
<div class={"\u0070\u0065\u006f\u0070\u006c\u0065\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u0073"}></div>;

{
<div></div>;

{
<div class={"\u0070\u002d\u0067\u0072\u0069\u0064"}></div>;

{
<div class={"\u0070\u002d\u0063\u006f\u006c\u002d\u0031\u0032"}></div>;

{
<b></b>;

(slotProps.data.name);
}
}
{
<div class={"\u0070\u002d\u0063\u006f\u006c\u002d\u0031\u0032"}></div>;

{
<b></b>;

(slotProps.data.year);
}
}
{
<div class={"\u0070\u002d\u0063\u006f\u006c\u002d\u0031\u0032"}></div>;

{
<b></b>;

(slotProps.data.vin);
}
}
{
<div class={"\u0070\u002d\u0063\u006f\u006c\u002d\u0031\u0032"}></div>;

{
<b></b>;

(slotProps.data.color);
}
}
}
}
}
}
}
{
<template></template>;

const __VLS_20 = new DataView({ value: ((__VLS_ctx.items)), layout: ("\u0067\u0072\u0069\u0064"), });
[items,];
declare const __VLS_21: __VLS_types.ExtractComponentSlots<typeof __VLS_20>;
const slotProps = __VLS_21['grid'];
{
<div style={{}} class={"\u0070\u002d\u0063\u006f\u006c\u002d\u0031\u0032\u0020\u0070\u002d\u006d\u0064\u002d\u0033"}></div>;

{
<Panel header={(slotProps.data.name)} style={{}}></Panel>;

{
<div class={"\u0070\u0065\u006f\u0070\u006c\u0065\u002d\u0064\u0065\u0074\u0061\u0069\u006c"}></div>;

(slotProps.data.height);
{
<br />;
}
(slotProps.data.mass);
{
<br />;
}
(slotProps.data.hair_color);
{
<br />;
}
(slotProps.data.skin_color);
{
<br />;
}
(slotProps.data.eye_color);
{
<br />;
}
(slotProps.data.birth_year);
{
<br />;
}
(slotProps.data.gender);
}
}
}
}
}
}
{
<PaginatorVue /> == { "\u003d\u003d\u003d\u003d\u003d":  } < Paginator; { true; } > ; PaginatorVue > ;

}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./People.vue')['default'];
