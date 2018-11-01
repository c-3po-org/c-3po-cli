// presets
import * as presetEnv from "@babel/preset-env";
import * as presetReact from "@babel/preset-react";
import { TransformOptions, ConfigItem } from "@babel/core";
import * as ttagTypes from "./types";

// plugins
import * as classPropPlugin from "@babel/plugin-proposal-class-properties";
import * as restSpreadPlugin from "@babel/plugin-proposal-object-rest-spread";
import * as exportDefaultFromPlugin from "@babel/plugin-proposal-export-default-from";
import * as babelTtagPlugin from "babel-plugin-ttag";

export const defaultPlugins: ConfigItem[] = [
    classPropPlugin,
    restSpreadPlugin,
    exportDefaultFromPlugin
];

export const defaultPresets: ConfigItem[] = [presetEnv, presetReact];

export function makeBabelConf(ttagOpts: ttagTypes.TtagOpts): TransformOptions {
    return {
        presets: [...defaultPresets],
        plugins: [...defaultPlugins, [babelTtagPlugin, ttagOpts]]
    };
}