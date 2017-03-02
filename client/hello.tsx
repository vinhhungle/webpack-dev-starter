import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
}

Hello.prototype.render = require('./Hello.rt');