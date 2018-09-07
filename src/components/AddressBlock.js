import React from 'react'

// Styles
import './AddressBlock.css'

const AddressBlock = () => {
    return (
        <div>
            <h3 className="h3">Shipping address</h3>
            <div className="fields-grid">
                <Field type="text" className="col-6" placeholder="First name" required/>
                <Field type="text" className="col-6" placeholder="Last name" required/>
                <Field type="text" className="col-8" placeholder="Street address" required/>
                <Field type="text" className="col-4" placeholder="Apt/Suite (Optional)"/>
                <Field type="text" className="col-4" value="100095"/>
                <Field type="text" className="col-4" value="NEW YORK"/>
                <Field type="text" className="col-4" value="NEW YORK"/>
                <Field type="text" className="col-12" value="UNITED STATES"/>
                <div className="mobile-number col-12">
                    <Field type="phone" className="mobile-number__field" placeholder="Mobile number (Optional)"/>
                    <div className="mobile-number__description">
                        We may send you special discounts and offers
                    </div>
                </div>
            </div>
            <Toggle className="address-toggle"
                    checked={!this.state.billingAddress}
                    onChange={this.toggleAddress}
            >
                <span className="address-checkbox"/>
                <span className="address-toggle__text">Use this address as my billing address</span>
            </Toggle>
        </div>
    )
}

export default AddressBlock
