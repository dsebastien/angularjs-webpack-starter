"use strict";

import Inject from "./";

import {AbstractController} from "./modules/commons/controllers/abstract.controller";
import IStateService = angular.ui.IStateService;
import ILogService = angular.ILogService;

// controller
export class AppController extends AbstractController {

    public constructor(@Inject("$log") logger:ILogService, @Inject("$state") $state:IStateService) {
        super(logger, $state);
        logger.debug("Application bootstrapped!");
    }
}
