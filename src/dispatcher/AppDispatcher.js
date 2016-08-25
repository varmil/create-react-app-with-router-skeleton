/*
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

import { Dispatcher } from 'flux'

const instance = new Dispatcher()
export default instance

// Actionから呼び出す時に毎回Dispatcher.dispatch()という書き方だと長いのでdispatchだけで呼べるように別途export
export const dispatch = instance.dispatch.bind(instance);
