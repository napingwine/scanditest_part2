import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component.js';
import ContentWrapper from 'Component/ContentWrapper';
import { BILLING_STEP, SHIPPING_STEP, DETAILS_STEP } from 'SourceRoute/Checkout/Checkout.config';
import { ProgressBar } from '../../component/ProgressBar/ProgressBar'
import './Checkout.extention.style.scss';

class Checkout extends SourceCheckout {

    renderProgressBar() {
        const { checkoutStep } = this.props;
        const progressBarSteps = [SHIPPING_STEP, BILLING_STEP, DETAILS_STEP];
        return <ProgressBar checkoutStep={checkoutStep} progressBarSteps={progressBarSteps} />;
    };

    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                    wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
                    label={__('Checkout page')}
                >
                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;