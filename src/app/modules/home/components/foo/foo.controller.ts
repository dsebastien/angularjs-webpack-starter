"use strict";

import Inject from "../../../../";

import IStateService = angular.ui.IStateService;
import ILogService = angular.ILogService;

import {AbstractController} from "../../../commons/controllers/abstract.controller";

export class FooController extends AbstractController {

    public constructor(@Inject("$log") logger:ILogService, @Inject("$state") $state:IStateService) {
        super(logger, $state);
        logger.debug("Foo component loaded");
    }
}
