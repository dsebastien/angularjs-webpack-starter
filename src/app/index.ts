"use strict";

export default function Inject(injectable: string): (prototype: ng.IControllerService, method: any, argumentPosition: number) => void {
  return function(prototype: ng.IControllerService, method: any, argumentPosition: number): void {
    prototype.$inject = prototype.$inject || [];
    prototype.$inject[argumentPosition] = injectable;
  };
}

export * from "./app";
