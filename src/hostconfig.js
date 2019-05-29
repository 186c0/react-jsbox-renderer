import View from './Components/View'
import warn from 'warning'
import { filterProps, emptyObject, now, debug } from './helper'

const NO_CONTEXT = true

export default class HostConfig {
  getPublicInstance({ element }) {
    return element
  }

  getRootHostContext() {
    return NO_CONTEXT
  }

  getChildHostContext() {
    return NO_CONTEXT
  }

  prepareForCommit() {
    // noop
  }

  resetAfterCommit() {
    // noop
  }

  @debug
  createInstance(type, props, internalInstanceHandle) {
    return new View(type, props)
  }

  @debug
  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child)
  }

  finalizeInitialChildren(parentInstance, type, props) {
    return false
  }

  @debug
  prepareUpdate(instance, type, oldProps, newProps) {
    return filterProps(oldProps, newProps) || null
  }

  shouldSetTextContent() {
    return false
  }

  shouldDeprioritizeSubtree(type, props) {
    return false
  }

  createTextInstance() {
    return null
  }

  setTimeout = setTimeout

  clearTimeout = clearTimeout

  now = now

  supportsMutation = true

  supportsPersistence = false

  supportsHydration = false

  @debug
  appendChild(parentInstance, child) {
    parentInstance.appendChild(child)
  }

  @debug
  appendChildToContainer(parentInstance, child) {
    const parent = parentInstance.element || parentInstance
    parent.runtimeValue().$addSubview(child.element)
  }

  commitMount(instance, updatePayload, type, oldProps, newProps) {
    // noop
  }

  @debug
  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    if (updatePayload) {
      instance.update(updatePayload)
    }
  }

  @debug
  insertBefore(parentInstance, child, beforeChild) {
    parentInstance.insertBefore(child, beforeChild)
  }

  @debug
  insertInContainerBefore(parentInstance, child, beforeChild) {
    const parent = parentInstance.element || parentInstance
    parent
      .runtimeValue()
      .$insertSubview_belowSubview(child.element, beforeChild.element)
  }

  @debug
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child)
  }

  @debug
  removeChildFromContainer(parentInstance, child) {
    child.element.remove()
  }

  resetTextContent() {
    // noop
  }

  @debug
  hideInstance(instance) {
    instance.element.hidden = true
  }

  @debug
  unhideInstance(instance) {
    instance.element.hidden = false
  }

  @debug
  hideTextInstance(instance) {
    instance.element.hidden = true
  }

  @debug
  unhideTextInstance(instance) {
    instance.element.hidden = false
  }

  // cloneInstance(instance, updatePayload, type, oldProps, newProps) {}

  // createContainerChildSet() {}

  // appendChildToContainerChildSet() {}

  // finalizeContainerChildren() {}

  // replaceContainerChildren() {}

  // cloneHiddenInstance() {}

  // cloneUnhiddenInstance() {}

  // createHiddenTextInstance() {}

  // canHydrateInstance() {}

  // canHydrateTextInstance() {}

  // getNextHydratableSibling() {}

  // getFirstHydratableChild() {}

  // hydrateInstance() {}

  // hydrateTextInstance() {}
}