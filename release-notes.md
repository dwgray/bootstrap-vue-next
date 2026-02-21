:robot: I have created a release *beep* *boop*
---


<details><summary>nuxt: 0.40.0</summary>

## [0.40.0](https://github.com/dwgray/bootstrap-vue-next/compare/nuxt-v0.43.6...nuxt-v0.40.0) (2026-02-21)


###   BREAKING CHANGES

* **BTable:** change item details to expandedItems to make more linguistic sense. toggleDetails -> toggleExpansion, row-details slot to row-expansion. Linguistically, detailedItems as a modelValue didn't make sense as it implied content details information, rather than a rows expanded state. We renamed this for lingustical clarity, as well as symmetry with the similar selectedItems modelValue
* **BTable:** selected items exposed utilities in the template ref are now under the selection key,
* **BTable:** exposed selection utility functions names are more generic, to align with the newly exposed functions for expandedItems-- add, toggle, remove, clear, set, setAll, isActivated, get
* **BTable:** itemDetails as a property on the items object is removed. Use the v-model instead. This allows you to programatically modify the v-model, rather than relying on mutating the source item object
* **BTabs:** the activate-tab emit now emits a single argument, an object containing the data, rather than five separate arguments
* **BTable:** emits now give out single argument objects, rather than four or so parameters
* **BTable:** fix typo in btableLiteProps export to be bTableLiteProps
* **BTable:** fix typo in btableProps export to be bTableProps
* **BTable:** for field.key remove the ability to use nested string paths like name.firstName and instead require the use of a function via the accessor property. Root object paths for keys still work, optional accessor property takes precidence
* **BTable:** field.key is not a simple string value
* **BTable:** tableefieldformatter function now has a single parameter object instead of multiple parameters
* **BTable:** TableField tdAttr now has a single parameter object instead of multiple parameters
* **BTable:** TableField thAttr now has a single parameter object instead of multiple parameters
* **BSort:** Implement initial-sort-direction and move compare from sort-by to fields ([#2777](https://github.com/dwgray/bootstrap-vue-next/issues/2777))
* Merged the Orchestrator components into one.
* renamed the controller composables to `useToast`, `useModal`, and `usePopover`
* combined the old plugins to match the new BApp and composables.
* the old `useModal` was removed since `useToggle` does all what it did.
* new `BApp` component as the recommended way to configure bootstrap-vue-next applications, replacing the plugin-based approach.
* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes #2565
* **useToast:** rename useToast to useToastController fixes #2155
* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes #1752
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes #2221 . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic

### Features

* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes [#1752](https://github.com/dwgray/bootstrap-vue-next/issues/1752) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BFormCheckbboxGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/dwgray/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/dwgray/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BFormRadioGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/dwgray/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/dwgray/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BImg:** add manual configuration support for NuxtImg and docs on how to ([78f330b](https://github.com/dwgray/bootstrap-vue-next/commit/78f330b115adf357fa2d80ee4264887531249e67))
* **BLink:** add NuxtLink automatic support ([78f330b](https://github.com/dwgray/bootstrap-vue-next/commit/78f330b115adf357fa2d80ee4264887531249e67))
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes [#2221](https://github.com/dwgray/bootstrap-vue-next/issues/2221) . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BSort:** Implement initial-sort-direction and move compare from sort-by to fields ([#2777](https://github.com/dwgray/bootstrap-vue-next/issues/2777)) ([b3eec6e](https://github.com/dwgray/bootstrap-vue-next/commit/b3eec6eaabf654bb21124b9601d9c3809e5eb0cc))
* **BTable:** add emptyText and emptyFilteredText functionality fixes [#664](https://github.com/dwgray/bootstrap-vue-next/issues/664) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** add getFromPrimaryKey and resolvedItems in the selection and expansion template ref keys as utility funcs ([78f330b](https://github.com/dwgray/bootstrap-vue-next/commit/78f330b115adf357fa2d80ee4264887531249e67))
* **BTable:** change item details to expandedItems to make more linguistic sense. toggleDetails -&gt; toggleExpansion, row-details slot to row-expansion. Linguistically, detailedItems as a modelValue didn't make sense as it implied content details information, rather than a rows expanded state. We renamed this for lingustical clarity, as well as symmetry with the similar selectedItems modelValue ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** emits now give out single argument objects, rather than four or so parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** Enhanced BTableEmits and BTableProps to use readonly array types for better immutability ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** export some more types that were not previously available ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** exposed selection utility functions names are more generic, to align with the newly exposed functions for expandedItems-- add, toggle, remove, clear, set, setAll, isActivated, get ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** field.key is not a simple string value ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** fix typo in btableLiteProps export to be bTableLiteProps ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** fix typo in btableProps export to be bTableProps ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** for field.key remove the ability to use nested string paths like name.firstName and instead require the use of a function via the accessor property. Root object paths for keys still work, optional accessor property takes precidence ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** for table fields, add an optional accessor property, this can be a string value that is a property key on the prop.item object for keys that are at the root of the object. For more complex, nested keys, use the function getter style ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** itemDetails as a property on the items object is removed. Use the v-model instead. This allows you to programatically modify the v-model, rather than relying on mutating the source item object ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** primary key we no longer use the less known dot syntax for getting the value from the item object. NOw, use functional syntax for the primary key prop ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** primary key will effect selectedItems and expandedItems. Modifying the primary key prop will clear these models ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** selected items exposed utilities in the template ref are now under the selection key, ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** tableefieldformatter function now has a single parameter object instead of multiple parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** TableField tdAttr now has a single parameter object instead of multiple parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** TableField thAttr now has a single parameter object instead of multiple parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTabs:** the activate-tab emit now emits a single argument, an object containing the data, rather than five separate arguments ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* combined the old plugins to match the new BApp and composables. ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* Merged the Orchestrator components into one. ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* new `BApp` component as the recommended way to configure bootstrap-vue-next applications, replacing the plugin-based approach.  ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* **PluginControllers:** Allow for using the prop.id for the items key. Ie if you supply modalController.show({props: {id: 'foo' }}) You can reference it leave('foo') ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* renamed the controller composables to `useToast`, `useModal`, and `usePopover` ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* the old `useModal` was removed since `useToggle` does all what it did. ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* **usePopoverController:** create usePopoverController composable (not fully complete) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **useToast:** rename useToast to useToastController fixes [#2155](https://github.com/dwgray/bootstrap-vue-next/issues/2155) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))


### Bug Fixes

* **BAvatar:** avatar style getting literal Size values fixes [#2535](https://github.com/dwgray/bootstrap-vue-next/issues/2535) ([7621aad](https://github.com/dwgray/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* **BDropdown:** bdropdown when in button group has class btn-group fixes [#2025](https://github.com/dwgray/bootstrap-vue-next/issues/2025) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BFormOptions*:** Fix prop inheritance and type safety ([#3016](https://github.com/dwgray/bootstrap-vue-next/issues/3016)) ([b842f34](https://github.com/dwgray/bootstrap-vue-next/commit/b842f34e48f0b4c6c9e5b603a623060c15c88239))
* **BLink:** Link receiving / href when trying to use href prop fixes [#2434](https://github.com/dwgray/bootstrap-vue-next/issues/2434) ([#2438](https://github.com/dwgray/bootstrap-vue-next/issues/2438)) ([aea1798](https://github.com/dwgray/bootstrap-vue-next/commit/aea179881c27e429b1588a62844fd230ec36df0d))
* **BLink:** nuxt should do full page reloads on to prop fixes [#2445](https://github.com/dwgray/bootstrap-vue-next/issues/2445) ([#2449](https://github.com/dwgray/bootstrap-vue-next/issues/2449)) ([cce9833](https://github.com/dwgray/bootstrap-vue-next/commit/cce9833ebd91bcfe1037ffb6422edfdc03389198))
* **BTable:** b-table-sortable-column class not workign when is sortable ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** busy slot behavior to match bootstrap-vue fixes [#1636](https://github.com/dwgray/bootstrap-vue-next/issues/1636) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** cast formatted items to string fixes [#2227](https://github.com/dwgray/bootstrap-vue-next/issues/2227) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** duplicate labels with both labelstacked and label fixes [#2608](https://github.com/dwgray/bootstrap-vue-next/issues/2608) ([0658251](https://github.com/dwgray/bootstrap-vue-next/commit/0658251e3a592835c89b829993ea874a54b4ae22))
* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes [#2565](https://github.com/dwgray/bootstrap-vue-next/issues/2565) ([05d0b6e](https://github.com/dwgray/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTableLite:** for cell() slots, items in the vslot would not take into account global defaults value ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTableLite:** stacked uses field key instead of defined label fixes [#2591](https://github.com/dwgray/bootstrap-vue-next/issues/2591) ([05d0b6e](https://github.com/dwgray/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTable:** stacked mode when using breakpoint data-label not rendering fixes [#2595](https://github.com/dwgray/bootstrap-vue-next/issues/2595) ([2c3970c](https://github.com/dwgray/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BTable:** syncronous errors in provider function handled correctly and will stop loading animation ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** type of row-clicked and head-clicked could possibly be a keyboardevent ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** when cell tdAttr is a function do not overwrite the function when data label is active ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **nuxt:** module using wrong routerComponentName causing default a tag to do full page reloads ([#2465](https://github.com/dwgray/bootstrap-vue-next/issues/2465)) ([c737ec2](https://github.com/dwgray/bootstrap-vue-next/commit/c737ec255b8eb848a6711eea5383cbf20b002556))
* **nuxt:** remove bridge:false ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **types:** built types file not being exported, this really only effects utilities that could benefit from the list of all components names ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* update deps fixes [#2487](https://github.com/dwgray/bootstrap-vue-next/issues/2487) ([#2617](https://github.com/dwgray/bootstrap-vue-next/issues/2617)) ([5f4416e](https://github.com/dwgray/bootstrap-vue-next/commit/5f4416eaf644145cb3f454e051905a851b6a0091))
* **useScrollLock:** file meant to be public not in the correct format leading to build errors ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))


### Performance Improvements

* **BFormSelect:** dont wrap a localValue proxy to modelValue to reduce extra computed ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** use a single array.reduce instead of multiple verbose methods when iterating the items array. Reducing the total number of iterations fixes [#2404](https://github.com/dwgray/bootstrap-vue-next/issues/2404) ([7621aad](https://github.com/dwgray/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* use getter functions over computed in some cases ([34d2a8f](https://github.com/dwgray/bootstrap-vue-next/commit/34d2a8f850dd965100ccbbcd8c00f05baceb6caa))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.40.0
  * peerDependencies
    * bootstrap-vue-next bumped to 0.40.0
</details>

<details><summary>bootstrapvuenext: 0.40.0</summary>

## [0.40.0](https://github.com/dwgray/bootstrap-vue-next/compare/bootstrapvuenext-v0.43.6...bootstrapvuenext-v0.40.0) (2026-02-21)


###   BREAKING CHANGES

* **BTable:** change item details to expandedItems to make more linguistic sense. toggleDetails -> toggleExpansion, row-details slot to row-expansion. Linguistically, detailedItems as a modelValue didn't make sense as it implied content details information, rather than a rows expanded state. We renamed this for lingustical clarity, as well as symmetry with the similar selectedItems modelValue
* **BTable:** selected items exposed utilities in the template ref are now under the selection key,
* **BTable:** exposed selection utility functions names are more generic, to align with the newly exposed functions for expandedItems-- add, toggle, remove, clear, set, setAll, isActivated, get
* **BTable:** itemDetails as a property on the items object is removed. Use the v-model instead. This allows you to programatically modify the v-model, rather than relying on mutating the source item object
* **BTabs:** the activate-tab emit now emits a single argument, an object containing the data, rather than five separate arguments
* **BTable:** emits now give out single argument objects, rather than four or so parameters
* **BTable:** fix typo in btableLiteProps export to be bTableLiteProps
* **BTable:** fix typo in btableProps export to be bTableProps
* **BTable:** for field.key remove the ability to use nested string paths like name.firstName and instead require the use of a function via the accessor property. Root object paths for keys still work, optional accessor property takes precidence
* **BTable:** field.key is not a simple string value
* **BTable:** tableefieldformatter function now has a single parameter object instead of multiple parameters
* **BTable:** TableField tdAttr now has a single parameter object instead of multiple parameters
* **BTable:** TableField thAttr now has a single parameter object instead of multiple parameters
* **BFormFile:** align component with Bootstrap 5.3 native file input styling ([#2954](https://github.com/dwgray/bootstrap-vue-next/issues/2954))
* **BTable:** make sort icons background images to avoid wrapping & remove relevant slots
* **BSort:** Implement initial-sort-direction and move compare from sort-by to fields ([#2777](https://github.com/dwgray/bootstrap-vue-next/issues/2777))
* Merged the Orchestrator components into one.
* renamed the controller composables to `useToast`, `useModal`, and `usePopover`
* combined the old plugins to match the new BApp and composables.
* the old `useModal` was removed since `useToggle` does all what it did.
* new `BApp` component as the recommended way to configure bootstrap-vue-next applications, replacing the plugin-based approach.
* **BTabs:** change modelValue to have id, and add v-model:index for the old value
* **BPopover:** change prop content to body to align with other components
* **BTooltip:** change prop content to body to align with other components
* **useModalController:** move props to main level, add slots
* **useToastController:** remove props obj, the parameters are flat now. Add slots, rename pos -> position
* controller composables functions return promise, with id and chainable functions
* **useModalController:** change of api, check the docs
* **BAlert:** make act like toast, useShowHide.
* **BOffcanvas:** remove nofocus prop and add more versitile focus prop
* **BModal:** remove autofocus and autofocusButton props and add more versitile focus prop
* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes #2565
* **BCarousel:** rename 'click:prev' and 'click:next" to 'prev-click' and 'next-click'
* **BDropdown:** rename 'click:split' to 'split-click'
* **BDdropdown:** Replace click event on split button with split-click
* **show/hide:** make components that show/hide use a composable useShowHide
* **show/hide:** add props lazy and unmount-lazy
* **show/hide:** many animation fixes
* **show/hide:** add prop initial-animation to animate on initial render if modelValue is true, otherwise display the component without animation
* **BPopover:** change slot prop showState to visible
* **BPopover:** remove prop persistent, use lazy instead
* many changes to show/hide components (BCollapse,BDropdown,BModal,BOffcanvas,BPopover,BTooltip,BToast) and rename props starting with skip or hide to start with no
* remove html props -- use equivalent slots fixes #1930 ([#2311](https://github.com/dwgray/bootstrap-vue-next/issues/2311))
* **BFormRadioGroup:** add slot option to replace html prop
* **BFormCheckboxGroup:** add slot option to replace html prop
* **useToast:** rename useToast to useToastController fixes #2155
* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes #1752
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes #2221 . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic
* **BTable:** rename event row-dbl-clicked to row-dblclicked ([#2239](https://github.com/dwgray/bootstrap-vue-next/issues/2239))

### Features

* add __usedComponents __usedDirectives property to the BootstrapVueNextResolver function ([#2351](https://github.com/dwgray/bootstrap-vue-next/issues/2351)) ([7a0cfa9](https://github.com/dwgray/bootstrap-vue-next/commit/7a0cfa91e98abff85a9b7b47e54b0dd2a59bf61a))
* add borderVariant prop to BCardBody and bodyBorderVariant to BCard ([#3061](https://github.com/dwgray/bootstrap-vue-next/issues/3061)) ([abe1bff](https://github.com/dwgray/bootstrap-vue-next/commit/abe1bff3100db3d461e4722369c2759ca8dbed6c))
* Add headerAttrs prop to BOffcanvas and BModal components ([59d1e80](https://github.com/dwgray/bootstrap-vue-next/commit/59d1e809f57b7443faa7d53dcb6db7b6f0c8ea97))
* add max-height and max-width CSS custom properties to floating-ui components ([#3065](https://github.com/dwgray/bootstrap-vue-next/issues/3065)) ([0749141](https://github.com/dwgray/bootstrap-vue-next/commit/074914198fbae0a9b2233667fa896b5e525f29bb))
* add name and form props to BFormRating for form submission ([#2895](https://github.com/dwgray/bootstrap-vue-next/issues/2895)) ([f14f049](https://github.com/dwgray/bootstrap-vue-next/commit/f14f0495a03678a4f6c0d0ee87d3eabfc6def136))
* add NumpadEnter support for BTable and BFormTags keyboard navigation (accessibility) ([#2884](https://github.com/dwgray/bootstrap-vue-next/issues/2884)) ([bdf6fee](https://github.com/dwgray/bootstrap-vue-next/commit/bdf6fee56eaf708d1b14e89f0179c4d44b7bf063))
* add option slot syntax to other group components ([ce01648](https://github.com/dwgray/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **b-form-rating:** add `icon-clear` slot ([#2809](https://github.com/dwgray/bootstrap-vue-next/issues/2809)) ([4120f3d](https://github.com/dwgray/bootstrap-vue-next/commit/4120f3d30e77d36e113bf1dd93581f073117c5b3))
* **BAccordion:** add model index to control the index of open item/items. If free is true it is an array of open items ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BAccordion:** modelValue is array id prop free is true ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BAlert:** make act like toast, useShowHide. ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BBreadcrumb:** add olClass and olAttrs props for styling inner ol element ([#3063](https://github.com/dwgray/bootstrap-vue-next/issues/3063)) ([88332b4](https://github.com/dwgray/bootstrap-vue-next/commit/88332b4abcd3900e900960a7cae338b44f9ed1a2))
* **BBreadcrumb:** allow it to use individual breadcrumb trails with useBreadcrumb by passing prop id to component and id param to composable fixes [#2630](https://github.com/dwgray/bootstrap-vue-next/issues/2630) ([0271b95](https://github.com/dwgray/bootstrap-vue-next/commit/0271b956b25b5b837698cca81bfe64af9dde8ebd))
* **BButtonToolbar:** Add keyboard navigation support ([#2837](https://github.com/dwgray/bootstrap-vue-next/issues/2837)) ([81bd846](https://github.com/dwgray/bootstrap-vue-next/commit/81bd8466f62b4445f1a68303c53416a2a5653d9c))
* **BCarousel:** add aria attributes, add prop labelIndicators ([#2293](https://github.com/dwgray/bootstrap-vue-next/issues/2293)) ([c3f8199](https://github.com/dwgray/bootstrap-vue-next/commit/c3f8199a609affb46dc5b7b0efc08e8c12c9e973))
* **BDropdown:** add variant, classes and correct attrs to text sub components ([d2d4905](https://github.com/dwgray/bootstrap-vue-next/commit/d2d4905e5506ca7b15aa285a8acd972469db3d38))
* **BDropdown:** add variant, classes and correct attrs to text sub components ([#2258](https://github.com/dwgray/bootstrap-vue-next/issues/2258)) ([d2d4905](https://github.com/dwgray/bootstrap-vue-next/commit/d2d4905e5506ca7b15aa285a8acd972469db3d38))
* **BDropdown:** allow setting icon prop on nested BButton ([018daa5](https://github.com/dwgray/bootstrap-vue-next/commit/018daa52bb85373f48092ed8a4a46901692645ff))
* **BDropdown:** allow setting icon prop on nested BButton ([#2746](https://github.com/dwgray/bootstrap-vue-next/issues/2746)) ([018daa5](https://github.com/dwgray/bootstrap-vue-next/commit/018daa52bb85373f48092ed8a4a46901692645ff))
* **BDropdownForm:** add validated and novalidate to form ([d2d4905](https://github.com/dwgray/bootstrap-vue-next/commit/d2d4905e5506ca7b15aa285a8acd972469db3d38))
* **BDropdown:** id for split and menu elements ([2caf82b](https://github.com/dwgray/bootstrap-vue-next/commit/2caf82bfbe894d981d649156ad44dd627d062712))
* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes [#1752](https://github.com/dwgray/bootstrap-vue-next/issues/1752) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BForm*:** implement wrapper pattern for type safety for remaining components ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **BFormChecboxGroup:** implement type safety for value/text/disable fields ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormCheckbboxGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/dwgray/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/dwgray/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BFormCheckboxGroup:** add slot option to replace html prop ([ce01648](https://github.com/dwgray/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BFormDatalist:** Typescript validation + docs & cleanup ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* BFormGroup to SFC -- more a refactor, but be mindful of accidental changes. Please submit issue reports if things look wrong. Also you can now use useDefaults now with BFormGroup ([07daa80](https://github.com/dwgray/bootstrap-vue-next/commit/07daa80aef41df5b8e31578c2bc695823c2f6510))
* **BFormGroup:** add props to apply attrs to label and content wrappers in horizontal mode ([#2960](https://github.com/dwgray/bootstrap-vue-next/issues/2960)) ([d583297](https://github.com/dwgray/bootstrap-vue-next/commit/d583297576aaecc47127cc6f34353030df7b99ec))
* **BFormGroup:** add the ability to automatically get the ids from inputs and apply them to the associated label element ([ce01648](https://github.com/dwgray/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BFormGroup:** automatically add state to child element fixes [#2476](https://github.com/dwgray/bootstrap-vue-next/issues/2476) ([#2478](https://github.com/dwgray/bootstrap-vue-next/issues/2478)) ([25a77ee](https://github.com/dwgray/bootstrap-vue-next/commit/25a77eefcb24a002626dbf7422666d36cde6f155))
* **BFormOptions*:** Implement Base/Wrapper Pattern for Type-Safe Form Options Components ([#2984](https://github.com/dwgray/bootstrap-vue-next/issues/2984)) ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **BFormRadioGroup:** add slot option to replace html prop ([ce01648](https://github.com/dwgray/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BFormRadioGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/dwgray/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/dwgray/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BFormRadioGroup:** typesafe implementation of configuration fields ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormRating:** add locale prop for internationalization support ([#3069](https://github.com/dwgray/bootstrap-vue-next/issues/3069)) ([662c339](https://github.com/dwgray/bootstrap-vue-next/commit/662c339a052ad227216b7b9f6db5cb87d84fd6a2))
* **BFormRating:** use semantic output element and improve ARIA attributes ([#3075](https://github.com/dwgray/bootstrap-vue-next/issues/3075)) ([c043592](https://github.com/dwgray/bootstrap-vue-next/commit/c043592f0aae0af3262ccc0e3e900806d89bd4aa))
* **BFormSelect:** add class and custom attributes support to option objects ([#2997](https://github.com/dwgray/bootstrap-vue-next/issues/2997)) ([cdbcba4](https://github.com/dwgray/bootstrap-vue-next/commit/cdbcba4c9a197ca8c63aad2b52c1e394596479b5))
* **BFormSelect:** re-implement class and custom attrs support on options objects ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **BFormSelect:** type safety plan and proof of concept ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormTags:** add inputValue to exposed fixes [#2503](https://github.com/dwgray/bootstrap-vue-next/issues/2503) ([9c5129b](https://github.com/dwgray/bootstrap-vue-next/commit/9c5129bd49d596efe3e74772e355a67dc8c22356))
* **BFormTags:** added feedbackAriaLive prop  ([#2696](https://github.com/dwgray/bootstrap-vue-next/issues/2696)) ([b65c1e4](https://github.com/dwgray/bootstrap-vue-next/commit/b65c1e4496e636e889b97e42c27e28dfb4231e45))
* **BFormTags:** implement ignoreInputFocusSelector prop ([#3074](https://github.com/dwgray/bootstrap-vue-next/issues/3074)) ([66f9d0d](https://github.com/dwgray/bootstrap-vue-next/commit/66f9d0d09d3674299c7534bc66313cb3cacc8311))
* **BFormTextarea:** add props max-rows & no-auto-shrink fixes [#2077](https://github.com/dwgray/bootstrap-vue-next/issues/2077)  ([#2284](https://github.com/dwgray/bootstrap-vue-next/issues/2284)) ([87cbcb7](https://github.com/dwgray/bootstrap-vue-next/commit/87cbcb7d7f1b88c3a28658ce44e48bdb4b9eae7a))
* **BFromGroup:** add class b-form-group ([2caf82b](https://github.com/dwgray/bootstrap-vue-next/commit/2caf82bfbe894d981d649156ad44dd627d062712))
* **BImg:** add class b-img ([2caf82b](https://github.com/dwgray/bootstrap-vue-next/commit/2caf82bfbe894d981d649156ad44dd627d062712))
* **BImg:** add manual configuration support for NuxtImg and docs on how to ([78f330b](https://github.com/dwgray/bootstrap-vue-next/commit/78f330b115adf357fa2d80ee4264887531249e67))
* **BLink:** add NuxtLink automatic support ([78f330b](https://github.com/dwgray/bootstrap-vue-next/commit/78f330b115adf357fa2d80ee4264887531249e67))
* **BModal:** add okClass and cancelClass to add classes to the buttons. ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BModal:** remove autofocus and autofocusButton props and add more versitile focus prop ([e6a89ef](https://github.com/dwgray/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BModal:** return focus to previous element on close ([e6a89ef](https://github.com/dwgray/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BModal:** use css var for zindex, add helper vars and ontop class ([#2556](https://github.com/dwgray/bootstrap-vue-next/issues/2556)) ([98eecae](https://github.com/dwgray/bootstrap-vue-next/commit/98eecae6bc49b0b5339f08a31b23b8cbc63e1170))
* **BModal:** use css var for zindex, add helper vars and stack position classess ([98eecae](https://github.com/dwgray/bootstrap-vue-next/commit/98eecae6bc49b0b5339f08a31b23b8cbc63e1170))
* **BNavForm:** add props wrapperAttrs & bind attrs.class to li also add prop formClass ([ce01648](https://github.com/dwgray/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BOffcanvas:** add opened to breakpoint event ([#2443](https://github.com/dwgray/bootstrap-vue-next/issues/2443)) ([e82be33](https://github.com/dwgray/bootstrap-vue-next/commit/e82be33486a71d0e7412fb20c70e176be4db0d4c))
* **BOffcanvas:** fire breakpoint on mounted & add ref into defineExpose as isOpenByBreakpoint ([083805b](https://github.com/dwgray/bootstrap-vue-next/commit/083805b6b533639b1209b9a312aa541528e74987))
* **BOffcanvas:** remove nofocus prop and add more versitile focus prop ([e6a89ef](https://github.com/dwgray/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BOffcanvas:** return focus to previous element on close ([e6a89ef](https://github.com/dwgray/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BPagination:** add keyboard shortcuts fixes [#2153](https://github.com/dwgray/bootstrap-vue-next/issues/2153) ([69cf134](https://github.com/dwgray/bootstrap-vue-next/commit/69cf134f9b22fe06bd8bc2e43f21617ecd17a296))
* **BPagination:** add small screen support ([#2308](https://github.com/dwgray/bootstrap-vue-next/issues/2308)) ([9764584](https://github.com/dwgray/bootstrap-vue-next/commit/97645843d0d47afa69286fee4f965841295125ed))
* **BPopover:** add explicit props for focus and hover triggers ([#2795](https://github.com/dwgray/bootstrap-vue-next/issues/2795)) ([c50e0ef](https://github.com/dwgray/bootstrap-vue-next/commit/c50e0efe54bd8ca2aa636e7f63177547a40429c5))
* **BPopover:** add hideMargin prop to add margin to the hide boundary ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** add prop hideMargin ([bc4df5f](https://github.com/dwgray/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** add titleClass and bodyClass, remove unneeded customClass prop since class is inherited to the same place ([08c89fd](https://github.com/dwgray/bootstrap-vue-next/commit/08c89fdbb4a1782f33fe651f71229d46d9d35de6))
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes [#2221](https://github.com/dwgray/bootstrap-vue-next/issues/2221) . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BSort:** Implement initial-sort-direction and move compare from sort-by to fields ([#2777](https://github.com/dwgray/bootstrap-vue-next/issues/2777)) ([b3eec6e](https://github.com/dwgray/bootstrap-vue-next/commit/b3eec6eaabf654bb21124b9601d9c3809e5eb0cc))
* **BTab:** expose activate and deactivate ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BTable:** add an AbortSignal to the provider object parameter for cancelling in progress requests ([2a12859](https://github.com/dwgray/bootstrap-vue-next/commit/2a12859404a4ee498e6ccc4aa5490dab9997d7c7))
* **BTable:** add configurable debouncing ([2a12859](https://github.com/dwgray/bootstrap-vue-next/commit/2a12859404a4ee498e6ccc4aa5490dab9997d7c7))
* **BTable:** add custom filter functions ([9ec1e04](https://github.com/dwgray/bootstrap-vue-next/commit/9ec1e04e38894e6f8fa73d7cfc83cd5bd28a2244))
* **BTable:** add defineSlots types ([#2300](https://github.com/dwgray/bootstrap-vue-next/issues/2300)) ([cc5af51](https://github.com/dwgray/bootstrap-vue-next/commit/cc5af51327ccbc366a9354cb387b025e5e377904))
* **BTable:** add emptyText and emptyFilteredText functionality fixes [#664](https://github.com/dwgray/bootstrap-vue-next/issues/664) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** add getFromPrimaryKey and resolvedItems in the selection and expansion template ref keys as utility funcs ([78f330b](https://github.com/dwgray/bootstrap-vue-next/commit/78f330b115adf357fa2d80ee4264887531249e67))
* **BTable:** add row-contextmenu event fixes [#2238](https://github.com/dwgray/bootstrap-vue-next/issues/2238) ([3f81473](https://github.com/dwgray/bootstrap-vue-next/commit/3f814733a36cb0611597602d2f142caf0c99621b))
* **BTable:** add row-middle-clicked event ([3f81473](https://github.com/dwgray/bootstrap-vue-next/commit/3f814733a36cb0611597602d2f142caf0c99621b))
* **BTable:** change item details to expandedItems to make more linguistic sense. toggleDetails -&gt; toggleExpansion, row-details slot to row-expansion. Linguistically, detailedItems as a modelValue didn't make sense as it implied content details information, rather than a rows expanded state. We renamed this for lingustical clarity, as well as symmetry with the similar selectedItems modelValue ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** emits now give out single argument objects, rather than four or so parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** Enhanced BTableEmits and BTableProps to use readonly array types for better immutability ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** export some more types that were not previously available ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** Expose additional functions and document them ([#2632](https://github.com/dwgray/bootstrap-vue-next/issues/2632)) ([2d1ecfd](https://github.com/dwgray/bootstrap-vue-next/commit/2d1ecfda397f0dd67dddd0c2d6a4663baeeda818))
* **BTable:** expose table items ([#2463](https://github.com/dwgray/bootstrap-vue-next/issues/2463)) ([40be163](https://github.com/dwgray/bootstrap-vue-next/commit/40be16314ef901d3819647ec76445290a38cae26))
* **BTable:** exposed selection utility functions names are more generic, to align with the newly exposed functions for expandedItems-- add, toggle, remove, clear, set, setAll, isActivated, get ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** field.key is not a simple string value ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** fix typo in btableLiteProps export to be bTableLiteProps ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** fix typo in btableProps export to be bTableProps ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** for field.key remove the ability to use nested string paths like name.firstName and instead require the use of a function via the accessor property. Root object paths for keys still work, optional accessor property takes precidence ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** for table fields, add an optional accessor property, this can be a string value that is a property key on the prop.item object for keys that are at the root of the object. For more complex, nested keys, use the function getter style ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** generate ids for tr elements when primary-key exists fixes [#2509](https://github.com/dwgray/bootstrap-vue-next/issues/2509) ([11cd367](https://github.com/dwgray/bootstrap-vue-next/commit/11cd3672e3b50b2f8f70ba0583bd3e6dfd952b09))
* **BTable:** implement 'fixed' and 'noBorderCollapse' props ([#2681](https://github.com/dwgray/bootstrap-vue-next/issues/2681)) ([9486276](https://github.com/dwgray/bootstrap-vue-next/commit/9486276fe43ddc5085681a6fa8dc32a9cfacd242))
* **BTable:** Implement keyboard navigation ([#2834](https://github.com/dwgray/bootstrap-vue-next/issues/2834)) ([b4b5f6f](https://github.com/dwgray/bootstrap-vue-next/commit/b4b5f6fc74be26dc85443e3bb808015439b4b0e8))
* **BTable:** implement outlined prop fixes [#2507](https://github.com/dwgray/bootstrap-vue-next/issues/2507)  ([#2511](https://github.com/dwgray/bootstrap-vue-next/issues/2511)) ([11cd367](https://github.com/dwgray/bootstrap-vue-next/commit/11cd3672e3b50b2f8f70ba0583bd3e6dfd952b09))
* **BTable:** itemDetails as a property on the items object is removed. Use the v-model instead. This allows you to programatically modify the v-model, rather than relying on mutating the source item object ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTableLite:** add `table-colgroup` slot ([#2680](https://github.com/dwgray/bootstrap-vue-next/issues/2680)) ([16ebcce](https://github.com/dwgray/bootstrap-vue-next/commit/16ebcce078993751b57a75baa5b36f21da134889))
* **BTable:** make it possible to style custom footers ([#2314](https://github.com/dwgray/bootstrap-vue-next/issues/2314)) ([264fc9e](https://github.com/dwgray/bootstrap-vue-next/commit/264fc9eca9e1f0951706dbf88087a2da2ba214ea))
* **BTable:** primary key we no longer use the less known dot syntax for getting the value from the item object. NOw, use functional syntax for the primary key prop ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** primary key will effect selectedItems and expandedItems. Modifying the primary key prop will clear these models ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** selected items exposed utilities in the template ref are now under the selection key, ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** tableefieldformatter function now has a single parameter object instead of multiple parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** TableField tdAttr now has a single parameter object instead of multiple parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** TableField thAttr now has a single parameter object instead of multiple parameters ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTabs:** add underline prop ([f464982](https://github.com/dwgray/bootstrap-vue-next/commit/f464982fc78f5f7eec28d23187a8127fd9751859))
* **BTabs:** change modelValue to have id, and add v-model:index for the old value ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BTabs:** noKeyNav prop ([85de425](https://github.com/dwgray/bootstrap-vue-next/commit/85de4253ab98a40d097a49cca52e89b81e95fc47))
* **BTabs:** the activate-tab emit now emits a single argument, an object containing the data, rather than five separate arguments ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BToast:** add defineSlots ([ce01648](https://github.com/dwgray/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BToast:** add noProgress prop, make progress show as default if modelValue is number. fix(useToastController): if using the deprecated show method the countdown didn't start. ([90b578d](https://github.com/dwgray/bootstrap-vue-next/commit/90b578d54392fdd699e583f07cfe437fdd8d8979))
* **BTooltip:** strongly type slots ([e51461e](https://github.com/dwgray/bootstrap-vue-next/commit/e51461e16188e2ea290a6979c75da68edf3cc749))
* change useColorMode selector from 'body' to 'html' ([#2830](https://github.com/dwgray/bootstrap-vue-next/issues/2830)) ([688f826](https://github.com/dwgray/bootstrap-vue-next/commit/688f826cb9c51c552069adaa31cd2b4857c886cf))
* clean deprecated classes and props from bootstrap (sr-only =&gt; visually-hidden) ([d3783ec](https://github.com/dwgray/bootstrap-vue-next/commit/d3783ec1d3cfd13e1aed747dbd04005a245b3b11))
* **colorvariant:** add subtle and emphasis variant fixes [#2079](https://github.com/dwgray/bootstrap-vue-next/issues/2079) ([5946219](https://github.com/dwgray/bootstrap-vue-next/commit/5946219512bfbf1a533a23670295ed5a8dfbaba9))
* combined the old plugins to match the new BApp and composables. ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* controller composables functions return promise, with id and chainable functions ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* export validatestate type ([#2493](https://github.com/dwgray/bootstrap-vue-next/issues/2493)) ([43f2f5a](https://github.com/dwgray/bootstrap-vue-next/commit/43f2f5ac8341141f5100a190e81d0a76fe6bba04))
* implement base/wrapper pattern for BFormCheckboxGroup ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* implement BFormRating component ([#2744](https://github.com/dwgray/bootstrap-vue-next/issues/2744)) ([860671e](https://github.com/dwgray/bootstrap-vue-next/commit/860671e173d73a80676ad4280e187269dbeaf4b9))
* implement BFormRating disabled state ([#2753](https://github.com/dwgray/bootstrap-vue-next/issues/2753)) ([#2793](https://github.com/dwgray/bootstrap-vue-next/issues/2793)) ([d837222](https://github.com/dwgray/bootstrap-vue-next/commit/d8372223530e2038246e237732391c71a802dd23))
* make blink a non fragment fixes [#295](https://github.com/dwgray/bootstrap-vue-next/issues/295) ([395b100](https://github.com/dwgray/bootstrap-vue-next/commit/395b100e2c2034024bc292fbaf70ffa3906170b8))
* Merged the Orchestrator components into one. ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* new `BApp` component as the recommended way to configure bootstrap-vue-next applications, replacing the plugin-based approach.  ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* pass prefetch-related props through to BLink in all consuming components ([#3067](https://github.com/dwgray/bootstrap-vue-next/issues/3067)) ([8eb1718](https://github.com/dwgray/bootstrap-vue-next/commit/8eb1718eedf0f08a3135b20399f400e1bedc6fe5))
* **Placement:** Export additional placement types ([#2532](https://github.com/dwgray/bootstrap-vue-next/issues/2532)) ([220b7e4](https://github.com/dwgray/bootstrap-vue-next/commit/220b7e4feb2e23ffedec4cd75d54e46e0111489c))
* **PluginControllers:** Allow for using the prop.id for the items key. Ie if you supply modalController.show({props: {id: 'foo' }}) You can reference it leave('foo') ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* remove html props -- use equivalent slots fixes [#1930](https://github.com/dwgray/bootstrap-vue-next/issues/1930) ([#2311](https://github.com/dwgray/bootstrap-vue-next/issues/2311)) ([ce01648](https://github.com/dwgray/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* rename defaultsPlugin to more generic bootstrapPlugin -- this essential plugin may contain more essential features than just defaults ([#2288](https://github.com/dwgray/bootstrap-vue-next/issues/2288)) ([22440a9](https://github.com/dwgray/bootstrap-vue-next/commit/22440a9cefd7d1a381c23ac33a07198ae4532ec7))
* renamed the controller composables to `useToast`, `useModal`, and `usePopover` ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* **show/hide:** add prop backdrop-first to animate backdrop first ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** add prop initial-animation to animate on initial render if modelValue is true, otherwise display the component without animation ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** add prop visible to show without animation ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** add props lazy and unmount-lazy ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** make components that show/hide use a composable useShowHide ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** rename toggle prop to show, it opens the component with animation ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* the old `useModal` was removed since `useToggle` does all what it did. ([ba90f59](https://github.com/dwgray/bootstrap-vue-next/commit/ba90f596ad3376ebddda535bf8b88232c60befff))
* TypeScript Type Safety for Form Components with Options ([#2941](https://github.com/dwgray/bootstrap-vue-next/issues/2941)) ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* use vueuse 12 fixes [#2469](https://github.com/dwgray/bootstrap-vue-next/issues/2469) ([#2471](https://github.com/dwgray/bootstrap-vue-next/issues/2471)) ([bf50c30](https://github.com/dwgray/bootstrap-vue-next/commit/bf50c304b1612411311f035e9b1ca3af701fdd19))
* **useModalController:** add support for using syntax in ts ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useModalController:** change of api, check the docs ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **usePopoverController:** add slots ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **usePopoverController:** allow more options ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **usePopoverController:** create usePopoverController composable (not fully complete) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **useShowHide:** create triggerRegistry for adding external triggers (like in vBToggle) ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useShowHide:** show returns a promise, resolve on show or hide. ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useToastController:** remove props obj, the parameters are flat now. Add slots, rename pos -&gt; position ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useToast:** rename useToast to useToastController fixes [#2155](https://github.com/dwgray/bootstrap-vue-next/issues/2155) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **useToggle:** add trigger to promise resolve on hide. ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useToggle:** toggle any show/hide component ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))


### Bug Fixes

* add form-control class to range inputs inside input groups ([#3055](https://github.com/dwgray/bootstrap-vue-next/issues/3055)) ([1d3205a](https://github.com/dwgray/bootstrap-vue-next/commit/1d3205a20abbd507c85c632fa63aba9d6aee3052))
* add missing 'click' event to BPopoverEmits ([#3046](https://github.com/dwgray/bootstrap-vue-next/issues/3046)) ([23434f3](https://github.com/dwgray/bootstrap-vue-next/commit/23434f3c4c244de81751afb1174c1466d65508c7))
* allow custom component props in orchestrator create methods with type safety ([#2922](https://github.com/dwgray/bootstrap-vue-next/issues/2922)) ([fdf2359](https://github.com/dwgray/bootstrap-vue-next/commit/fdf2359c1cc4f154a40de8ae4252dbb0eb0235c9))
* augment global components for IDE inferences fixes [#2534](https://github.com/dwgray/bootstrap-vue-next/issues/2534) ([#2584](https://github.com/dwgray/bootstrap-vue-next/issues/2584)) ([3432f8b](https://github.com/dwgray/bootstrap-vue-next/commit/3432f8b293671e4e6900164728eb63d3987e4bc5))
* **BAccordionItem:** fix initial modelValue ([b72b8da](https://github.com/dwgray/bootstrap-vue-next/commit/b72b8da7e503c3395d0f2f4139d392268c0cc5bc))
* **BAccordion:** modelValue is now undefined if no items open. ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BAccordion:** reactivity working in v-for ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BAccordion:** ssr fixes. ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BApp:** wrap our test app in BApp in main.ts to enable easy verification of useModal, etc. ([#2865](https://github.com/dwgray/bootstrap-vue-next/issues/2865)) ([d7d3476](https://github.com/dwgray/bootstrap-vue-next/commit/d7d347665f92ad910fc45fc079f304c19d91c99f))
* **BAvatar:** avatar style getting literal Size values fixes [#2535](https://github.com/dwgray/bootstrap-vue-next/issues/2535) ([7621aad](https://github.com/dwgray/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* **BAvatar:** failback on image load error ([#2281](https://github.com/dwgray/bootstrap-vue-next/issues/2281)) ([a51327f](https://github.com/dwgray/bootstrap-vue-next/commit/a51327f2721aa373329258ff8e551f57c123b394))
* **BAvatar:** variant being applied to link causing avatar img to become faded and not show svg when using prop href ([#2295](https://github.com/dwgray/bootstrap-vue-next/issues/2295)) ([daecdd9](https://github.com/dwgray/bootstrap-vue-next/commit/daecdd97953ff675e4c094a18946e45195cf3d9c))
* **BButton:** Consume useColorVariantClasses ([#2640](https://github.com/dwgray/bootstrap-vue-next/issues/2640)) ([379fd9a](https://github.com/dwgray/bootstrap-vue-next/commit/379fd9acc185f87d806d62e4be4c8045a59da485))
* **BCarousel:** fix v-for updates ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BCarousel:** rename 'click:prev' and 'click:next" to 'prev-click' and 'next-click' ([dc496d0](https://github.com/dwgray/bootstrap-vue-next/commit/dc496d0a017116a89bec4c61250cceb2052b9e24))
* **BDdropdown:** Replace click event on split button with split-click ([a9b59c8](https://github.com/dwgray/bootstrap-vue-next/commit/a9b59c8ee53b7553b9644a4dff90ea4728b77521))
* **BDropdown:** bdropdown when in button group has class btn-group fixes [#2025](https://github.com/dwgray/bootstrap-vue-next/issues/2025) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BDropdown:** change `split-click` to `click:split` ([f27544b](https://github.com/dwgray/bootstrap-vue-next/commit/f27544b56fc7bdb72769a9cb2ea57db676cb35f8))
* **BDropdown:** correctly calculate size on some edge cases ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BDropdown:** don't calulcate the position when dropdown is not shown. ([4dd6c89](https://github.com/dwgray/bootstrap-vue-next/commit/4dd6c89146b9d5a4a089c4af4c2162d577cd7fb4))
* **BDropdown:** fix infinite loop on keyboard navigation ([#2342](https://github.com/dwgray/bootstrap-vue-next/issues/2342)) ([2fd5db7](https://github.com/dwgray/bootstrap-vue-next/commit/2fd5db76eedae23635b23e7f6eead55ce89ee005))
* **BDropdown:** focus returned to dropdown when escape key hit ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BDropdownForm:** form class not working with string values fixes [#2633](https://github.com/dwgray/bootstrap-vue-next/issues/2633) ([#2634](https://github.com/dwgray/bootstrap-vue-next/issues/2634)) ([65ef49a](https://github.com/dwgray/bootstrap-vue-next/commit/65ef49ac9b31532f952d1329144694664ce0354c))
* **BDropdownItemButton:** prevent click on disabled button ([#2406](https://github.com/dwgray/bootstrap-vue-next/issues/2406)) ([6c2cd5f](https://github.com/dwgray/bootstrap-vue-next/commit/6c2cd5fde6ab4ff8e9d816fa2171fc230ccba004))
* **BDropdown:** point caret the right way ([fed58b5](https://github.com/dwgray/bootstrap-vue-next/commit/fed58b59ad3ab79244456d608c00df8872126dd8))
* **BDropdown:** prevent hydration warning in nuxt production mode ([#2768](https://github.com/dwgray/bootstrap-vue-next/issues/2768)) ([62e0632](https://github.com/dwgray/bootstrap-vue-next/commit/62e0632751e6f1d2af8642c75e94e7f1a4e30ad1))
* **BDropdown:** prevent propogation of click events ([3800847](https://github.com/dwgray/bootstrap-vue-next/commit/380084711e8052e59d83d1ec4ecb85d63e6642c8))
* **BDropdown:** rename 'click:split' to 'split-click' ([48caab3](https://github.com/dwgray/bootstrap-vue-next/commit/48caab3af1d8fd122e60600afce73b10d140bc41))
* **BDropdown:** transition broken by inline display styles ([#2832](https://github.com/dwgray/bootstrap-vue-next/issues/2832)) ([0363c2f](https://github.com/dwgray/bootstrap-vue-next/commit/0363c2f87c84e5703c43874f0d7baf3cd6a81a55))
* **BFormCheckbox:** indeterminate state not working properly fixes [#2271](https://github.com/dwgray/bootstrap-vue-next/issues/2271) ([#2274](https://github.com/dwgray/bootstrap-vue-next/issues/2274)) ([0d2fc28](https://github.com/dwgray/bootstrap-vue-next/commit/0d2fc2896534f7f00036db8e5cb8339b37117f14))
* **BFormCheckbox:** respect prop precendence ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormFile:** align component with Bootstrap 5.3 native file input styling ([#2954](https://github.com/dwgray/bootstrap-vue-next/issues/2954)) ([562989b](https://github.com/dwgray/bootstrap-vue-next/commit/562989bfbf3dbb5c14ae0f59b4b01b5744d1d371))
* **BFormFile:** Correctly pipe title on BFormFile custom mode ([#2963](https://github.com/dwgray/bootstrap-vue-next/issues/2963)) ([29e286d](https://github.com/dwgray/bootstrap-vue-next/commit/29e286dd2cd46bf5eb9387acec46a653e94279d6))
* **BFormFile:** omit directory/webkitdirectory attrs when falsy to fix SSR rendering ([#3056](https://github.com/dwgray/bootstrap-vue-next/issues/3056)) ([c776ca3](https://github.com/dwgray/bootstrap-vue-next/commit/c776ca3c61f9d1cc7253e9d6b4789a61291bf1e3))
* **BFormFIle:** put the title on the drop-zone and class & style on wrapper ([29e286d](https://github.com/dwgray/bootstrap-vue-next/commit/29e286dd2cd46bf5eb9387acec46a653e94279d6))
* **BFormFile:** remove capture attrs from dom if not defined. ([#2214](https://github.com/dwgray/bootstrap-vue-next/issues/2214)) ([85b38f3](https://github.com/dwgray/bootstrap-vue-next/commit/85b38f35b81600c05b504738096148afad8db713))
* **BFormGroup:** Apply user classes and label alignment to correct elements in horizontal mode ([#2943](https://github.com/dwgray/bootstrap-vue-next/issues/2943)) ([5eeda60](https://github.com/dwgray/bootstrap-vue-next/commit/5eeda608fca2c173a78711f00f1107091f4dd5e5))
* **BFormGroup:** Correctly handle clicking on label in horizontal mode ([44d68ac](https://github.com/dwgray/bootstrap-vue-next/commit/44d68accfe9308178860826b916623d7096287ee))
* **BFormGroup:** fix layout problem when label-for is not used ([#2321](https://github.com/dwgray/bootstrap-vue-next/issues/2321)) ([61d2b6b](https://github.com/dwgray/bootstrap-vue-next/commit/61d2b6b2725c5c5e8af1ffdca2440285d411e5b3))
* **BFormGroup:** floating labels not working fixes [#2452](https://github.com/dwgray/bootstrap-vue-next/issues/2452) ([#2455](https://github.com/dwgray/bootstrap-vue-next/issues/2455)) ([aa4b1c6](https://github.com/dwgray/bootstrap-vue-next/commit/aa4b1c6e1be3a75a7ed459f54c89068f2a677ade))
* **BFormGroup:** propagate disabled state to child form components via provide/inject ([#3028](https://github.com/dwgray/bootstrap-vue-next/issues/3028)) ([5b4db00](https://github.com/dwgray/bootstrap-vue-next/commit/5b4db00d81b96b7b10331477796b12fa84207a10))
* **bforminput:** abort debouncing if blur occurs ([6cab846](https://github.com/dwgray/bootstrap-vue-next/commit/6cab8464d4eb537807d6843c7db69ef007b8358c))
* **BFormInput:** bad model modifier trim behavior fixes [#2253](https://github.com/dwgray/bootstrap-vue-next/issues/2253) ([#2267](https://github.com/dwgray/bootstrap-vue-next/issues/2267)) ([bb0733f](https://github.com/dwgray/bootstrap-vue-next/commit/bb0733f20cdc7019bf4feac416a66f1555996d95))
* **BFormInput:** remove key attribute to prevent focus loss during typing ([#2981](https://github.com/dwgray/bootstrap-vue-next/issues/2981)) ([552efe9](https://github.com/dwgray/bootstrap-vue-next/commit/552efe91ca293f48787a7e32033e6b27451fa7ea))
* **BFormOptions*:** Fix prop inheritance and type safety ([#3016](https://github.com/dwgray/bootstrap-vue-next/issues/3016)) ([b842f34](https://github.com/dwgray/bootstrap-vue-next/commit/b842f34e48f0b4c6c9e5b603a623060c15c88239))
* **BFormRadioGroup:** Create a wrapper component to cleanly enable generics ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **BFormRadio:** inherit classes from parent causing props to not work fixes [#3007](https://github.com/dwgray/bootstrap-vue-next/issues/3007) ([#3015](https://github.com/dwgray/bootstrap-vue-next/issues/3015)) ([c614fc3](https://github.com/dwgray/bootstrap-vue-next/commit/c614fc3fe1f0cba708d20b71731f8eb3c487cd20))
* **BFormSelect:** changes based on code review ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormSelect:** Enable select default mechanism ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormSelect:** Fix & test global defaults ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormSelect:** Fix types/documentation about global defaults ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormSelect:** modelValue not being applied during SSR ([#2835](https://github.com/dwgray/bootstrap-vue-next/issues/2835)) ([44a4ccd](https://github.com/dwgray/bootstrap-vue-next/commit/44a4ccd8088511b47b2ac951b36dcbbc163cf30a))
* **BFormSelectOptionGroup.vue:** revert key=index changes ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **BFormSelectOptionGroup:** improve key management ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **BFormSelectOptionGroup:** use value as key where possible ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **BFormSelect:** prevent options with label from being treated as groups ([#2666](https://github.com/dwgray/bootstrap-vue-next/issues/2666)) ([c1645a9](https://github.com/dwgray/bootstrap-vue-next/commit/c1645a92d3ede914ef0fc939bed65066e13020ff))
* **BFormSelect:** refactor props to reduce redundancy ([767f51b](https://github.com/dwgray/bootstrap-vue-next/commit/767f51b93fd282c4aedc72a0416211755088a28f))
* **BFormSpinButton:** fix lacks default sizing ([#2305](https://github.com/dwgray/bootstrap-vue-next/issues/2305)) ([9e3614f](https://github.com/dwgray/bootstrap-vue-next/commit/9e3614fa9e1f3ccb4cdd614d60ba762a08a6a015))
* **BFormTextarea:** guard against null input ref after async nextTick in useTextareaResize ([#3062](https://github.com/dwgray/bootstrap-vue-next/issues/3062)) ([3ffa50f](https://github.com/dwgray/bootstrap-vue-next/commit/3ffa50fa0db90e677926ee098f8872baab7a3527))
* **BLink:** add active to default exactActiveClass fixes [#2693](https://github.com/dwgray/bootstrap-vue-next/issues/2693) ([45bb9c5](https://github.com/dwgray/bootstrap-vue-next/commit/45bb9c5f75a6dede49e20b8fa68af0da9f2d5d27))
* **BLink:** add computed to attribute (to || '') to routerLink fixes [#2429](https://github.com/dwgray/bootstrap-vue-next/issues/2429) ([ae01574](https://github.com/dwgray/bootstrap-vue-next/commit/ae0157491e9126da382272c381e0c402d066c408))
* **BLink:** Allow  "0" as a value for UnderlineLinkOpacity ([75c9e48](https://github.com/dwgray/bootstrap-vue-next/commit/75c9e48360d29dccc17120e072ad198985a8ab2d))
* **BLink:** Create and export Opacity and Offset types ([#2536](https://github.com/dwgray/bootstrap-vue-next/issues/2536)) ([f2af52f](https://github.com/dwgray/bootstrap-vue-next/commit/f2af52fce99034c34c348ae01d3fb27c0833d071))
* **BLink:** Link receiving / href when trying to use href prop fixes [#2434](https://github.com/dwgray/bootstrap-vue-next/issues/2434) ([#2438](https://github.com/dwgray/bootstrap-vue-next/issues/2438)) ([aea1798](https://github.com/dwgray/bootstrap-vue-next/commit/aea179881c27e429b1588a62844fd230ec36df0d))
* **BLink:** move active class to BNavItem ([#2747](https://github.com/dwgray/bootstrap-vue-next/issues/2747)) ([1e9b644](https://github.com/dwgray/bootstrap-vue-next/commit/1e9b6440d6c08b2c158740e2c9bfc6ac25a9c048))
* **BLink:** nuxt should do full page reloads on to prop fixes [#2445](https://github.com/dwgray/bootstrap-vue-next/issues/2445) ([#2449](https://github.com/dwgray/bootstrap-vue-next/issues/2449)) ([cce9833](https://github.com/dwgray/bootstrap-vue-next/commit/cce9833ebd91bcfe1037ffb6422edfdc03389198))
* **BLink:** routing not working in vitepress ([#3036](https://github.com/dwgray/bootstrap-vue-next/issues/3036)) ([2d1f534](https://github.com/dwgray/bootstrap-vue-next/commit/2d1f53472ba9d1c752b434501e7cf5cfb6279740))
* **BLink:** standardize computedLinkProps passthrough across all components ([#3072](https://github.com/dwgray/bootstrap-vue-next/issues/3072)) ([78d127b](https://github.com/dwgray/bootstrap-vue-next/commit/78d127b84a987d3f36ef4e3d5e186b30df33ad20))
* **BModal,BOffcanvas:** flicker when no animation and double animation when leaving with animation and backdrop-first ([0f5375f](https://github.com/dwgray/bootstrap-vue-next/commit/0f5375f259fd1c750efc265345b46f77fa061106))
* **BModal:** ensure clicking inside and releasing outside does not close modal ([85e987c](https://github.com/dwgray/bootstrap-vue-next/commit/85e987c407984ae70d37a82f4844694a52af13aa))
* **BModal:** ensure clicking inside and releasing outside does not close modal ([#2703](https://github.com/dwgray/bootstrap-vue-next/issues/2703)) ([#2704](https://github.com/dwgray/bootstrap-vue-next/issues/2704)) ([85e987c](https://github.com/dwgray/bootstrap-vue-next/commit/85e987c407984ae70d37a82f4844694a52af13aa))
* **BModal:** fallback focus element always present ([#2604](https://github.com/dwgray/bootstrap-vue-next/issues/2604)) ([#2605](https://github.com/dwgray/bootstrap-vue-next/issues/2605)) ([e512190](https://github.com/dwgray/bootstrap-vue-next/commit/e512190bd2ac5e6f55850423e40d880eb2170776))
* **BModal:** fix backdrop click prevention, fix flickering when no-fade ([#2262](https://github.com/dwgray/bootstrap-vue-next/issues/2262)) ([e008cf4](https://github.com/dwgray/bootstrap-vue-next/commit/e008cf43645cbf6656beaf9d568f63545db34888))
* **BModal:** fix backdrop when modal is shown using v-if ([#2269](https://github.com/dwgray/bootstrap-vue-next/issues/2269)) ([f317fab](https://github.com/dwgray/bootstrap-vue-next/commit/f317fabbf8a91665bd5f639249850811c5780c18))
* **BModal:** fix backdrop, fade and reduced animation ([#2250](https://github.com/dwgray/bootstrap-vue-next/issues/2250)) ([48cc89c](https://github.com/dwgray/bootstrap-vue-next/commit/48cc89ca198d811c520e0ca42a38ca9438429ae5))
* **BModal:** fix jumping when scrollbars are present ([#2211](https://github.com/dwgray/bootstrap-vue-next/issues/2211)) ([9ab6132](https://github.com/dwgray/bootstrap-vue-next/commit/9ab613252676524538e2713d5e55e21c0863320a))
* **BModal:** fix scrollLock in stack ([f713aaa](https://github.com/dwgray/bootstrap-vue-next/commit/f713aaa353968b4a0761486b881efadcfddea6e5))
* **BModal:** fix ssr. ([df4a90d](https://github.com/dwgray/bootstrap-vue-next/commit/df4a90dacbcc99ee86b03499eb53501e240eb0ba))
* **BModal:** multiple modals backdrop fix ([#2263](https://github.com/dwgray/bootstrap-vue-next/issues/2263)) ([f713aaa](https://github.com/dwgray/bootstrap-vue-next/commit/f713aaa353968b4a0761486b881efadcfddea6e5))
* **BModal:** prevent focus trap error when no tabbable elements exist ([#2864](https://github.com/dwgray/bootstrap-vue-next/issues/2864)) ([d5d85f2](https://github.com/dwgray/bootstrap-vue-next/commit/d5d85f2c741c789a3ca94e442ff371af73b49cbe))
* **BModal:** prevent modal remaining open when show/hide called in rapid succession ([#2979](https://github.com/dwgray/bootstrap-vue-next/issues/2979)) ([106ce85](https://github.com/dwgray/bootstrap-vue-next/commit/106ce8585976a65be623bf6db090b506e85e1270))
* **BModal:** quick open/close issue by checking renderRef in hide() ([106ce85](https://github.com/dwgray/bootstrap-vue-next/commit/106ce8585976a65be623bf6db090b506e85e1270))
* **BModal:** remove scrolllock on unmount ([#2277](https://github.com/dwgray/bootstrap-vue-next/issues/2277)) ([cb12723](https://github.com/dwgray/bootstrap-vue-next/commit/cb12723ae7c410116197b5fd2b60fa210156e083))
* **BModal:** set focus only once ([e6a89ef](https://github.com/dwgray/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BNavbar:** changed autoClose to noAutoClose and fix the documention mistake about it. ([b2d0c22](https://github.com/dwgray/bootstrap-vue-next/commit/b2d0c22e8f42eca6d9c2337226477643da0e00fe))
* **BNavbarToggle:** toggle default slot doesnt have a scoped argument 'expanded' fixes [#2348](https://github.com/dwgray/bootstrap-vue-next/issues/2348) ([981d684](https://github.com/dwgray/bootstrap-vue-next/commit/981d68415062b72f92414ec9dd905b6d61f15c38))
* **BNavItem:** pass BLink props through to inner BLink component ([#3066](https://github.com/dwgray/bootstrap-vue-next/issues/3066)) ([42b9f66](https://github.com/dwgray/bootstrap-vue-next/commit/42b9f66e52d6289b5965f822c0c35ceb1ae72b4f))
* BOffcanvas responsive SSR compatibility - defer breakpoint evaluation to client-side ([#2833](https://github.com/dwgray/bootstrap-vue-next/issues/2833)) ([ab99819](https://github.com/dwgray/bootstrap-vue-next/commit/ab99819077d8abf05b9beadf6eea31ece3e12b6c))
* **BOrchestrator:** fix transition delay. ([af49d33](https://github.com/dwgray/bootstrap-vue-next/commit/af49d333a6cb881aa7126e9e2a8741017fad630e))
* **BPagination:** fix maximum of 4 page number buttons displayed on small screens ([9764584](https://github.com/dwgray/bootstrap-vue-next/commit/97645843d0d47afa69286fee4f965841295125ed))
* **BPagination:** li's need to have role of presentation since parent ul is menubar ([cd4ac4f](https://github.com/dwgray/bootstrap-vue-next/commit/cd4ac4fd5b0a5f11d6b756066549a01cebda90be))
* **BPagination:** right/left/up/down arrow keys now operating better after new page chosen ([#2665](https://github.com/dwgray/bootstrap-vue-next/issues/2665)) ([2f05c84](https://github.com/dwgray/bootstrap-vue-next/commit/2f05c8494f6414d071b7e7bb76a75d97d6e2d34c))
* **BPopover:** allow hide without event. ([bc4df5f](https://github.com/dwgray/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** better hide functionality, called only once ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** calculate mouse and element positions in a performant way ([bc4df5f](https://github.com/dwgray/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** calculate mouse and element positions in a performant way ([#2252](https://github.com/dwgray/bootstrap-vue-next/issues/2252)) ([bc4df5f](https://github.com/dwgray/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** cancel show/hide during delay ([b915a98](https://github.com/dwgray/bootstrap-vue-next/commit/b915a98d8be6f170a404f13eb4c78b865b22313a))
* **BPopover:** change prop content to body to align with other components ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BPopover:** change slot prop showState to visible ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** Correct color arrow when arrow on top ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** correctly calculate size on some edge cases ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** don't calculate the position when popover is not shown. ([5d34b6d](https://github.com/dwgray/bootstrap-vue-next/commit/5d34b6d852c2ff6e61d2ce14c79737090c670730))
* **BPopover:** fire hide event only once ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** fix hide on reference hidden, fix close-on-hide. ([0f5375f](https://github.com/dwgray/bootstrap-vue-next/commit/0f5375f259fd1c750efc265345b46f77fa061106))
* **BPopover:** popover breaks flex layouts ([3a243f3](https://github.com/dwgray/bootstrap-vue-next/commit/3a243f3aedb98e80c3a62cf0f6082da97834065b))
* **BPopover:** remove prop persistent, use lazy instead ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BTab:** click event is now preventable. ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BTab:** error in recursion ([#2624](https://github.com/dwgray/bootstrap-vue-next/issues/2624)) ([da6fe97](https://github.com/dwgray/bootstrap-vue-next/commit/da6fe97c1caf55b52f22c13f2153439e52580793))
* **BTable:** always allow user selection when properties "selectable" and "no-select-on-click" are used together ([#2947](https://github.com/dwgray/bootstrap-vue-next/issues/2947)) ([bf17415](https://github.com/dwgray/bootstrap-vue-next/commit/bf17415f297af08499b8fb6da3bc7c78e3b1536b))
* **BTable:** b-table-sortable-column class not workign when is sortable ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** busy slot behavior to match bootstrap-vue fixes [#1636](https://github.com/dwgray/bootstrap-vue-next/issues/1636) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** busy slot behavior to match bootstrap-vue fixes [#1636](https://github.com/dwgray/bootstrap-vue-next/issues/1636)  ([#2249](https://github.com/dwgray/bootstrap-vue-next/issues/2249)) ([9581572](https://github.com/dwgray/bootstrap-vue-next/commit/95815728328bc7eedce33e4dc62376b651259f08))
* **BTable:** cast formatted items to string fixes [#2227](https://github.com/dwgray/bootstrap-vue-next/issues/2227) ([e6749a3](https://github.com/dwgray/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** cast formatted items to string fixes [#2227](https://github.com/dwgray/bootstrap-vue-next/issues/2227) ([#2247](https://github.com/dwgray/bootstrap-vue-next/issues/2247)) ([dabd159](https://github.com/dwgray/bootstrap-vue-next/commit/dabd1597e1d4775a23a6a9b161065db553a204a6))
* **BTable:** clean up slots to match those from bootstrap-vue fixes #& ([#2303](https://github.com/dwgray/bootstrap-vue-next/issues/2303)) ([e51461e](https://github.com/dwgray/bootstrap-vue-next/commit/e51461e16188e2ea290a6979c75da68edf3cc749))
* **BTable:** correct multi-sort to not update sortby in place ([#2644](https://github.com/dwgray/bootstrap-vue-next/issues/2644)) ([8936ff2](https://github.com/dwgray/bootstrap-vue-next/commit/8936ff24f69014c7077c493a51af4f9dbd4b4485))
* **BTable:** duplicate labels with both labelstacked and label fixes [#2608](https://github.com/dwgray/bootstrap-vue-next/issues/2608) ([0658251](https://github.com/dwgray/bootstrap-vue-next/commit/0658251e3a592835c89b829993ea874a54b4ae22))
* **BTable:** dynamic slots not rendering fixes [#2328](https://github.com/dwgray/bootstrap-vue-next/issues/2328) ([#2329](https://github.com/dwgray/bootstrap-vue-next/issues/2329)) ([6c16a9b](https://github.com/dwgray/bootstrap-vue-next/commit/6c16a9b970adb0607ea6dca9e785937aa001382b))
* **BTable:** events being wrongly stopped when sent from elements inside TRs ([#2841](https://github.com/dwgray/bootstrap-vue-next/issues/2841)) ([ee8b0f7](https://github.com/dwgray/bootstrap-vue-next/commit/ee8b0f71c8594de058bba2ef5d6ed2d2b034abf9))
* **BTable:** Export additional types ([#2519](https://github.com/dwgray/bootstrap-vue-next/issues/2519)) ([9b25255](https://github.com/dwgray/bootstrap-vue-next/commit/9b252551cff82c0ff1be4ba53b3c18d405962b86))
* **BTable:** filterFunction not working when filter prop is empty string fixes [#2993](https://github.com/dwgray/bootstrap-vue-next/issues/2993) ([#3008](https://github.com/dwgray/bootstrap-vue-next/issues/3008)) ([7b719b1](https://github.com/dwgray/bootstrap-vue-next/commit/7b719b13fef448708835fb89ae063d3082d87ad3))
* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes [#2565](https://github.com/dwgray/bootstrap-vue-next/issues/2565) ([05d0b6e](https://github.com/dwgray/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTable:** Fix typescript errors ([#2527](https://github.com/dwgray/bootstrap-vue-next/issues/2527)) ([ef28ba4](https://github.com/dwgray/bootstrap-vue-next/commit/ef28ba48a4cad8c00f9a7e68fa763a2a269cd852))
* **BTableLite:** field attribute isRowHeader now being respected ([#2713](https://github.com/dwgray/bootstrap-vue-next/issues/2713)) ([9a4b648](https://github.com/dwgray/bootstrap-vue-next/commit/9a4b648a31678ab1ea99f8c81b556ed166ae3fb3))
* **BTableLite:** for cell() slots, items in the vslot would not take into account global defaults value ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTableLite:** stacked uses field key instead of defined label fixes [#2591](https://github.com/dwgray/bootstrap-vue-next/issues/2591) ([05d0b6e](https://github.com/dwgray/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTableLite:** Use primary key to persist row-details state when items change ([#2871](https://github.com/dwgray/bootstrap-vue-next/issues/2871)) ([a933f96](https://github.com/dwgray/bootstrap-vue-next/commit/a933f96d1cf4bd1bc82645f18e1c9410e050ad76))
* **BTable:** make background sort icons customizable + docs ([#2933](https://github.com/dwgray/bootstrap-vue-next/issues/2933)) ([9cfe4a0](https://github.com/dwgray/bootstrap-vue-next/commit/9cfe4a0391dbc46a2842d356ae11b6229b906851))
* **BTable:** make foot props and slot fall back to head if not defined ([#2614](https://github.com/dwgray/bootstrap-vue-next/issues/2614)) ([05fffbb](https://github.com/dwgray/bootstrap-vue-next/commit/05fffbba869309c07369c7e587ed3870966664cf))
* **BTable:** make sort icons background images to avoid wrapping & remove relevant slots ([bae3932](https://github.com/dwgray/bootstrap-vue-next/commit/bae393217317fe9f2e2b09efb488da152c472aec))
* **BTable:** multi sort wiping comparer function ([#2575](https://github.com/dwgray/bootstrap-vue-next/issues/2575)) ([2817acc](https://github.com/dwgray/bootstrap-vue-next/commit/2817accc607d2d20e8e2f04ab64d4453c2388878))
* **BTable:** reflect single select mode on programmatic selection ([#2440](https://github.com/dwgray/bootstrap-vue-next/issues/2440)) ([1ea89dc](https://github.com/dwgray/bootstrap-vue-next/commit/1ea89dca23a80bbc5cc58ea479669663a4da0592))
* **BTable:** remove forced hiding of table footer in stacked mode ([#2969](https://github.com/dwgray/bootstrap-vue-next/issues/2969)) ([668d77e](https://github.com/dwgray/bootstrap-vue-next/commit/668d77ed5e3be510b3dd74465cd394fd37aca66b))
* **BTable:** rename event row-dbl-clicked to row-dblclicked ([#2239](https://github.com/dwgray/bootstrap-vue-next/issues/2239)) ([3f81473](https://github.com/dwgray/bootstrap-vue-next/commit/3f814733a36cb0611597602d2f142caf0c99621b))
* **BTable:** restore dark mode support for sort icons ([#2952](https://github.com/dwgray/bootstrap-vue-next/issues/2952)) ([bec2087](https://github.com/dwgray/bootstrap-vue-next/commit/bec20879598129c67f6ef02b89e191a9384d9f46))
* **BTable:** select mode range when table is sorted fixes [#2229](https://github.com/dwgray/bootstrap-vue-next/issues/2229) ([#2230](https://github.com/dwgray/bootstrap-vue-next/issues/2230)) ([e29a9ef](https://github.com/dwgray/bootstrap-vue-next/commit/e29a9efaee7a26257fa4a18e197b24d0dd819270))
* **BTable:** show empty slot instead of empty-filtered when filter is empty string ([#3026](https://github.com/dwgray/bootstrap-vue-next/issues/3026)) ([96b64e6](https://github.com/dwgray/bootstrap-vue-next/commit/96b64e66a198004c3575ae947e10b6cabad605c5))
* **BTableSimple:** fixed and nobordercollapse to work fixes [#2685](https://github.com/dwgray/bootstrap-vue-next/issues/2685) ([c61f532](https://github.com/dwgray/bootstrap-vue-next/commit/c61f532ce9c6ac232611084f25235e0926c7b836))
* **BTable:** sorting algorithm deleting comparer functions fixes [#2555](https://github.com/dwgray/bootstrap-vue-next/issues/2555) ([#2563](https://github.com/dwgray/bootstrap-vue-next/issues/2563)) ([4ee8552](https://github.com/dwgray/bootstrap-vue-next/commit/4ee85528393d19a3cd7464d507cf36ee97f74bb2))
* **BTable:** stacked mode when using breakpoint data-label not rendering fixes [#2595](https://github.com/dwgray/bootstrap-vue-next/issues/2595) ([2c3970c](https://github.com/dwgray/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BTable:** syncronous errors in provider function handled correctly and will stop loading animation ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** type of row-clicked and head-clicked could possibly be a keyboardevent ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** use a computed id when no id prop is provided ([11cd367](https://github.com/dwgray/bootstrap-vue-next/commit/11cd3672e3b50b2f8f70ba0583bd3e6dfd952b09))
* **BTable:** use watcher to compare changes with selectedItems fixes [#2245](https://github.com/dwgray/bootstrap-vue-next/issues/2245) ([#2246](https://github.com/dwgray/bootstrap-vue-next/issues/2246)) ([d48b559](https://github.com/dwgray/bootstrap-vue-next/commit/d48b559c1ecd68a14d523a52bfb96426595f1288))
* **BTable:** when cell tdAttr is a function do not overwrite the function when data label is active ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTabs:** Add type=button to buttons to prevent form submission ([#2740](https://github.com/dwgray/bootstrap-vue-next/issues/2740)) ([1a72f1b](https://github.com/dwgray/bootstrap-vue-next/commit/1a72f1b50494512b692b53f968a40222e66edd40))
* **BTabs:** correct class with card and pills ([d34e076](https://github.com/dwgray/bootstrap-vue-next/commit/d34e076e6829fe91ce1c808ecf11da9345425521))
* **BTabs:** correct class with card and pills ([8633804](https://github.com/dwgray/bootstrap-vue-next/commit/86338043e3b0ebfd99c7ecc196a5936e3b24d1d4))
* **BTabs:** correct id/index on ssr ([f68d393](https://github.com/dwgray/bootstrap-vue-next/commit/f68d39315eae220b9e772d584d5e2d2195269ff5))
* **BTabs:** correct id/index on ssr ([#2726](https://github.com/dwgray/bootstrap-vue-next/issues/2726)) ([f68d393](https://github.com/dwgray/bootstrap-vue-next/commit/f68d39315eae220b9e772d584d5e2d2195269ff5))
* **BTabs:** corrent classes on ssr ([2b37c18](https://github.com/dwgray/bootstrap-vue-next/commit/2b37c18dbe64ac430943361e0a67d86206a7e21e))
* **BTabs:** corrent classes on ssr ([#2664](https://github.com/dwgray/bootstrap-vue-next/issues/2664)) ([2b37c18](https://github.com/dwgray/bootstrap-vue-next/commit/2b37c18dbe64ac430943361e0a67d86206a7e21e))
* **BTabs:** delay tab selection when using v-model:index without explicit IDs ([#2978](https://github.com/dwgray/bootstrap-vue-next/issues/2978)) ([1315bc2](https://github.com/dwgray/bootstrap-vue-next/commit/1315bc24b16c7fabedf95536526b4b2c5b3476da))
* **BTabs:** fix another recursion error ([2b37c18](https://github.com/dwgray/bootstrap-vue-next/commit/2b37c18dbe64ac430943361e0a67d86206a7e21e))
* **BTabs:** fix focus on keyboard navigation ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BTabs:** fix initial value and some ssr errors ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BTabs:** make keyboard nav aria compatible. ([6d8de32](https://github.com/dwgray/bootstrap-vue-next/commit/6d8de3249e61e461a354158fc80f886f865a0e05))
* **BTabs:** posible loop if activate-tab event is prevented. ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BTabs:** reactivity in v-for fixed ([1fa8e5e](https://github.com/dwgray/bootstrap-vue-next/commit/1fa8e5e8e762ea7e946c1bcd8ae2e75adffa9a9e))
* **BTabs:** selection when using v-model:index without explicit IDs ([1315bc2](https://github.com/dwgray/bootstrap-vue-next/commit/1315bc24b16c7fabedf95536526b4b2c5b3476da))
* **bTh:** removed invalid rowspan/colspan for th elements scope attribute and made it more configurable with inferences to rowgroup/colgroup and default of col ([cd4ac4f](https://github.com/dwgray/bootstrap-vue-next/commit/cd4ac4fd5b0a5f11d6b756066549a01cebda90be))
* **BToast:** close BToast correctly if modelValue is changed from number to false ([df4a90d](https://github.com/dwgray/bootstrap-vue-next/commit/df4a90dacbcc99ee86b03499eb53501e240eb0ba))
* **BToast:** close BToast correctly if modelValue is changed from number to false ([#2745](https://github.com/dwgray/bootstrap-vue-next/issues/2745)) ([df4a90d](https://github.com/dwgray/bootstrap-vue-next/commit/df4a90dacbcc99ee86b03499eb53501e240eb0ba))
* **BToast:** countdown timer freezes when tab is inactive ([#2991](https://github.com/dwgray/bootstrap-vue-next/issues/2991)) ([96073d8](https://github.com/dwgray/bootstrap-vue-next/commit/96073d81f5e2dfbe8a306a07ef49b4c346640c73))
* **BToast:** race condition if using setInterval to update countdown ([1e383ce](https://github.com/dwgray/bootstrap-vue-next/commit/1e383ce5088a5ab2c93e15005ffcce211ab8e966))
* **BToast:** stop countdown if modelValue is set to 0 fixes [#2730](https://github.com/dwgray/bootstrap-vue-next/issues/2730) ([45bb9c5](https://github.com/dwgray/bootstrap-vue-next/commit/45bb9c5f75a6dede49e20b8fa68af0da9f2d5d27))
* **BToast:** toast disappearing on hover leave when is a boolean modelvalue ([#2307](https://github.com/dwgray/bootstrap-vue-next/issues/2307)) ([2971f61](https://github.com/dwgray/bootstrap-vue-next/commit/2971f617ba3a9f082d5a1bf8f1f29f51dc42c558))
* **BToggle:** stop looking for missing targets after directive is unmounted ([#2857](https://github.com/dwgray/bootstrap-vue-next/issues/2857)) ([b358449](https://github.com/dwgray/bootstrap-vue-next/commit/b3584492cad4c9ebeb37836cfd45aef878755249))
* **BTooltip:** change prop content to body to align with other components ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BTooltip:** default to 0 delay, fixes [#1938](https://github.com/dwgray/bootstrap-vue-next/issues/1938) ([b6603f1](https://github.com/dwgray/bootstrap-vue-next/commit/b6603f1bb59b1022bb43b6921a3a105747960b15))
* change all props starting skip or hide to start with no ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* ComponentProps): Add typescript definiton for setting global props ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
* **composables:** use shallowRef to prevent reactive component warning ([#2930](https://github.com/dwgray/bootstrap-vue-next/issues/2930)) ([4b1e12b](https://github.com/dwgray/bootstrap-vue-next/commit/4b1e12b9df16ba0fb69a28b85bdcf65e76153388))
* correctly pass attribute ariabusy fixes [#2378](https://github.com/dwgray/bootstrap-vue-next/issues/2378) ([bccf138](https://github.com/dwgray/bootstrap-vue-next/commit/bccf1387dd381f17f9ee3610e6c8cdd3ede1f73f))
* **directives:** Robustness fixes for directives ([#2906](https://github.com/dwgray/bootstrap-vue-next/issues/2906)) ([7b39759](https://github.com/dwgray/bootstrap-vue-next/commit/7b397599f76f50d10773cd8fb63fb6d2e72dc4c7))
* **grid:** Correct some inconsistencies in breakpoint types ([#2290](https://github.com/dwgray/bootstrap-vue-next/issues/2290)) ([7e7dc7f](https://github.com/dwgray/bootstrap-vue-next/commit/7e7dc7fabf3b39f18e9261b4eb14987d3a92aac1))
* improve form-range validation styling with focus, active states and Bootstrap 5 conventions ([#3070](https://github.com/dwgray/bootstrap-vue-next/issues/3070)) ([46ed78c](https://github.com/dwgray/bootstrap-vue-next/commit/46ed78cb7cdb57f588e99aa9067d50bfe29a6e30))
* inline functional style to show toast,modal and dropdown ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* last commit label issue ([#2457](https://github.com/dwgray/bootstrap-vue-next/issues/2457)) ([703eca3](https://github.com/dwgray/bootstrap-vue-next/commit/703eca32c66ffa1ccf2135e0217832ac4d00c1e4))
* make attributes reactive in Accordian, Tab, Dropdown*, etc. ([#2552](https://github.com/dwgray/bootstrap-vue-next/issues/2552)) ([081862d](https://github.com/dwgray/bootstrap-vue-next/commit/081862db996abbb8dbf7ba4ac2d3a824a4c03961))
* move ok and cancel emits from showHideEmits to BModalEmits ([#3064](https://github.com/dwgray/bootstrap-vue-next/issues/3064)) ([27a76dc](https://github.com/dwgray/bootstrap-vue-next/commit/27a76dce64a14c0d21cc60ce5b4103b12e892b07))
* **nuxt:** make injection keys static strings fixes [#2209](https://github.com/dwgray/bootstrap-vue-next/issues/2209) ([#2218](https://github.com/dwgray/bootstrap-vue-next/issues/2218)) ([5634dc3](https://github.com/dwgray/bootstrap-vue-next/commit/5634dc3f733bcd414737d5bb92bd56c83972b194))
* **nuxt:** remove bridge:false ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* patch regression issue in [#2665](https://github.com/dwgray/bootstrap-vue-next/issues/2665) ([#2670](https://github.com/dwgray/bootstrap-vue-next/issues/2670)) ([59ddc39](https://github.com/dwgray/bootstrap-vue-next/commit/59ddc3971cb58e88a8e460f2a9f21b47aa7b8d90))
* **RadiusElement:** Add 'md' value ([#2436](https://github.com/dwgray/bootstrap-vue-next/issues/2436)) ([473bc07](https://github.com/dwgray/bootstrap-vue-next/commit/473bc07a06e2fd6eff9d84bad50be8c393cc7ba5))
* remove boolean and null from modal promise return types ([#2957](https://github.com/dwgray/bootstrap-vue-next/issues/2957)) ([a75332e](https://github.com/dwgray/bootstrap-vue-next/commit/a75332efab0c397d2125e23ad634267151e5d0c9))
* rename ref to avoid Vue warnings (Fix [#2337](https://github.com/dwgray/bootstrap-vue-next/issues/2337)) ([#2353](https://github.com/dwgray/bootstrap-vue-next/issues/2353)) ([f505fe9](https://github.com/dwgray/bootstrap-vue-next/commit/f505fe992bf2dab57c6e10f42dfa8f0533ec1ad3))
* **scss:** moved all scss styles out of components ([43ef54d](https://github.com/dwgray/bootstrap-vue-next/commit/43ef54d7f28b78d7546cee9577f8f6c01d98b0f3))
* **show/hide:** emit shown/hidden after transition ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** many animation fixes ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** prevented emit events restore modelValue ([673529d](https://github.com/dwgray/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* ssr in scrollspy ([975ee0a](https://github.com/dwgray/bootstrap-vue-next/commit/975ee0a67f9ea14cd8d6c603ba44dd006bcf5f42))
* type popoverController ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **types:** built types file not being exported, this really only effects utilities that could benefit from the list of all components names ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **typings:** Fix paths to `*.d.mts` files ([#2907](https://github.com/dwgray/bootstrap-vue-next/issues/2907)) ([4b0d55a](https://github.com/dwgray/bootstrap-vue-next/commit/4b0d55a957f029131c89f740adc65ca7d9e79d58))
* update deps fixes [#2487](https://github.com/dwgray/bootstrap-vue-next/issues/2487) ([#2617](https://github.com/dwgray/bootstrap-vue-next/issues/2617)) ([5f4416e](https://github.com/dwgray/bootstrap-vue-next/commit/5f4416eaf644145cb3f454e051905a851b6a0091))
* **useBLinkHelper:** add exactActiveClass to the props that are used for BLink. ([45bb9c5](https://github.com/dwgray/bootstrap-vue-next/commit/45bb9c5f75a6dede49e20b8fa68af0da9f2d5d27))
* **useFocusTrap:** dont deactivate focus on esc fixes [#2144](https://github.com/dwgray/bootstrap-vue-next/issues/2144)  ([#2219](https://github.com/dwgray/bootstrap-vue-next/issues/2219)) ([89656ab](https://github.com/dwgray/bootstrap-vue-next/commit/89656ab96deb986f1674f5ffdef59ff4743a44c5))
* **useModalController:** move props to main level, add slots ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useModal:** fix finding correct lazy modal ([42a1768](https://github.com/dwgray/bootstrap-vue-next/commit/42a17683fd450d6f67b5913b7d7554630236b42b))
* **useModalManager:** use correct value in comparison ([a70f252](https://github.com/dwgray/bootstrap-vue-next/commit/a70f252a7b3158cce510b58ce520bcfb604bd8fa))
* **useModalOrchestrator:** circular dependency ([#2874](https://github.com/dwgray/bootstrap-vue-next/issues/2874)) ([c0bf12f](https://github.com/dwgray/bootstrap-vue-next/commit/c0bf12fe34f0671ae1b8392e6b4f9aeb605726d8))
* **useScrollLock:** file meant to be public not in the correct format leading to build errors ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **useShowHide:** add all the emits ([a8a2481](https://github.com/dwgray/bootstrap-vue-next/commit/a8a24814355ea107671dc2d7178380ce19a36968))
* **useShowHide:** convert collapsePlugin to showHidePlugin ([da64f3f](https://github.com/dwgray/bootstrap-vue-next/commit/da64f3f0306ee818b98603bc2b32ed2e0d8c85af))
* **useShowHide:** don't run show if component already unmounted (ie. BPopover) ([269e8c1](https://github.com/dwgray/bootstrap-vue-next/commit/269e8c17ba2c262aa734acd2aac231f5ea433575))
* **useShowHide:** fix race condition on close ([633ac35](https://github.com/dwgray/bootstrap-vue-next/commit/633ac35b4b6347e4d8c72b09fc4d38bac5893110))
* **useShowHide:** fix transition triggering in production build ([#2390](https://github.com/dwgray/bootstrap-vue-next/issues/2390)) ([ec07f13](https://github.com/dwgray/bootstrap-vue-next/commit/ec07f13a2b5b67dbdd3e03f5779cc794ca447dee))
* **useShowHide:** fix visible prop, better initial render ([58a0901](https://github.com/dwgray/bootstrap-vue-next/commit/58a090184ae59e75a21831d94f77a9e10bdf1ed2))
* **useShowHide:** fix visible prop, better initial render ([0957eb1](https://github.com/dwgray/bootstrap-vue-next/commit/0957eb1f95d6d27f52479ce301eefc94af537a8b))
* **useShowHide:** focustrap off at the begining of leave, pass down the trigger to other hide emits. ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useShowHide:** render based on initialState, fixes ssr on showhide components ([b889f1a](https://github.com/dwgray/bootstrap-vue-next/commit/b889f1a19b06a58f594d64ed5404e27c7683e71c))
* **useShowHide:** update the registry id when it changes in the component. fixes [#2729](https://github.com/dwgray/bootstrap-vue-next/issues/2729) ([45bb9c5](https://github.com/dwgray/bootstrap-vue-next/commit/45bb9c5f75a6dede49e20b8fa68af0da9f2d5d27))
* useTemplateRef usage throwing errors fixes [#2361](https://github.com/dwgray/bootstrap-vue-next/issues/2361) ([1a03b9b](https://github.com/dwgray/bootstrap-vue-next/commit/1a03b9b4c089ad80797f22200d02a1f6310714d2))
* **vBPopover:** add position absolute to floating directives ([#2234](https://github.com/dwgray/bootstrap-vue-next/issues/2234)) ([9e4d8b7](https://github.com/dwgray/bootstrap-vue-next/commit/9e4d8b7b8372a8aa3d6e3ec3fb3298f27e6292e0))
* **vBPopover:** fix vue error with floating directives. ([#2208](https://github.com/dwgray/bootstrap-vue-next/issues/2208)) ([e50a5ba](https://github.com/dwgray/bootstrap-vue-next/commit/e50a5ba867ac0ad7b1f71a73a8e76d690d58e686))
* **vBPopover:** revert [#2234](https://github.com/dwgray/bootstrap-vue-next/issues/2234) ([#2256](https://github.com/dwgray/bootstrap-vue-next/issues/2256)) ([67ab6c8](https://github.com/dwgray/bootstrap-vue-next/commit/67ab6c858fbd31a626d4a22e0eae9af49d86d1f7))
* **vBToggle:** find late components, ie. inside ClientOnly ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **vBToggle:** keep track of targets ([99718eb](https://github.com/dwgray/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **vBToggle:** use global showHide registry instead of dom to toggle components. fixes [#2398](https://github.com/dwgray/bootstrap-vue-next/issues/2398) ([da64f3f](https://github.com/dwgray/bootstrap-vue-next/commit/da64f3f0306ee818b98603bc2b32ed2e0d8c85af))
* **vBTooltip:** better default finding closes [#2076](https://github.com/dwgray/bootstrap-vue-next/issues/2076) ([da64f3f](https://github.com/dwgray/bootstrap-vue-next/commit/da64f3f0306ee818b98603bc2b32ed2e0d8c85af))


### Performance Improvements

* **BFormSelect:** dont wrap a localValue proxy to modelValue to reduce extra computed ([2a39525](https://github.com/dwgray/bootstrap-vue-next/commit/2a39525036bb39c37eb3f809232705b183413b53))
* **BTable:** use a single array.reduce instead of multiple verbose methods when iterating the items array. Reducing the total number of iterations fixes [#2404](https://github.com/dwgray/bootstrap-vue-next/issues/2404) ([7621aad](https://github.com/dwgray/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* use a composable rather than BTransition component, eliminating a useless fragment ([#2372](https://github.com/dwgray/bootstrap-vue-next/issues/2372)) ([a788a2d](https://github.com/dwgray/bootstrap-vue-next/commit/a788a2d6f1910221472e0bddb39e9029ec9f1a9b))
* use getter functions over computed in some cases ([34d2a8f](https://github.com/dwgray/bootstrap-vue-next/commit/34d2a8f850dd965100ccbbcd8c00f05baceb6caa))
* when dynamic spread, use ...undefined rather than ...{} for slightly less memory consumption ([#2430](https://github.com/dwgray/bootstrap-vue-next/issues/2430)) ([ae01574](https://github.com/dwgray/bootstrap-vue-next/commit/ae0157491e9126da382272c381e0c402d066c408))


### Reverts

* feat: TypeScript Type Safety for Form Components with Options ([#2941](https://github.com/dwgray/bootstrap-vue-next/issues/2941)) ([57fa915](https://github.com/dwgray/bootstrap-vue-next/commit/57fa915f0f0183922bb3244976370227dac38660))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).