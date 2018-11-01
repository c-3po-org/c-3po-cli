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
import * as babelDynamicImportPlugin from "@babel/plugin-syntax-dynamic-import";
import * as babelPluginDecorators from "@babel/plugin-proposal-decorators";

export const defaultPlugins: ConfigItem[] = [
    [babelPluginDecorators, { legacy: true }],
    [classPropPlugin, { loose: true }],
    restSpreadPlugin,
    exportDefaultFromPlugin,
    babelDynamicImportPlugin
];

export const defaultPresets: ConfigItem[] = [presetEnv, presetReact];

export function makeBabelConf(ttagOpts: ttagTypes.TtagOpts): TransformOptions {
    return {
        presets: [...defaultPresets],
        plugins: [...defaultPlugins, [babelTtagPlugin, ttagOpts]]
    };
}
