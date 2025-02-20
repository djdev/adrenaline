import { Component } from "react";

import Button from "../components/Button";
import { withRouter } from "../library/utilities";
import Mixpanel from "../library/mixpanel";

import "../styles/RateLimitMessage.css";

class RateLimitMessage extends Component {
    render() {
        const { className } = this.props;
        const { navigate } = this.props.router;

        return (
            <div className={`rateLimitMessage ${className ?? ""}`}>
                <span>Out of requests! <span>Upgrade to unlimited for $5/month.</span></span>
                <Button
                    className="rateLimitButton"
                    isPrimary
                    onClick={() => {
                        Mixpanel.track("click_upgrade_plan");
                        navigate("/subscription");
                    }}
                >
                    Upgrade
                </Button>
            </div>
        );
    }
}

export default withRouter(RateLimitMessage);