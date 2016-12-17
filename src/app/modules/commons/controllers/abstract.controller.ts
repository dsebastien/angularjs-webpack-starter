"use strict";

import Inject from "../../../";

import IStateService = angular.ui.IStateService;
import ILogService = angular.ILogService;

export abstract class AbstractController {
    private logger:ILogService;
    private $state:IStateService;

    public constructor(@Inject("$log") logger:ILogService, @Inject("$state") $state:IStateService) {
        this.logger = logger;
        this.$state = $state;
    }

    public isCurrentState(stateName:string):boolean {
        // const currentIncludes = this.$state.includes(stateName);
        // const currentIs = this.$state.is(stateName);
        const currentName:string = this.$state.current.name;

        return currentName === stateName;
    }

    public checkCurrentState():string {
        return this.$state.current.name;
    }
}
