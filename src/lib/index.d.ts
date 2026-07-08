import { Component } from 'svelte'

export type TNotificationTypes =
  | 'default'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success'

export interface TNotifier {
  send(message: string, type: TNotificationTypes, timeout?: number): void
  danger(message: string, timeout?: number): void
  warning(message: string, timeout?: number): void
  info(message: string, timeout?: number): void
  success(message: string, timeout?: number): void
}

export interface ITheme {
  danger: '#bb2124'
  success: '#22bb33'
  warning: '#f0ad4e'
  info: '#5bc0de'
  default: '#aaaaaa'
}

export type IProps = { themes?: ITheme; timeout?: number; persist?: boolean }

export const NotificationDisplay: Component<IProps>

export const notifier: TNotifier
