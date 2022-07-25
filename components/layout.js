import { printIntrospectionSchema } from "graphql";


export default function Layout (props) {

    return (
        <div className="m-24 bg-slate-600">
            {props.children}
        </div>
    );
}