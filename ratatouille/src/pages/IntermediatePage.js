import {Helmet} from "react-helmet";

export default function intermediatePage(){
    return (
        <div>
            <Helmet>
                <meta http-equiv="refresh" content=".01;url=./onboarding-welcome/" />
            </Helmet> 
        </div>
    );
}