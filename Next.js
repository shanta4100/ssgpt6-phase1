import { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'onetime'

  const plans = [
    {
      name: 'Basic',
      price: '$19',
      paypal: billingCycle === 'monthly' ? 'PAYPAL_SUB_19' : 'PAYPAL_ONETIME_19',
      stripe: billingCycle === 'monthly' ? 'STRIPE_SUB_19' : 'STRIPE_ONETIME_19',
    },
    {
      name: 'Standard',
      price: '$29',
      paypal: billingCycle === 'monthly' ? 'PAYPAL_SUB_29' : 'PAYPAL_ONETIME_29',
      stripe: billingCycle === 'monthly' ? 'STRIPE_SUB_29' : 'STRIPE_ONETIME_29',
    },
    {
      name: 'Pro',
      price: '$49',
      paypal: billingCycle === 'monthly' ? 'PAYPAL_SUB_49' : 'PAYPAL_ONETIME_49',
      stripe: billingCycle === 'monthly' ? 'STRIPE_SUB_49' : 'STRIPE_ONETIME_49',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Toggle Switch */}
      <div className="flex justify-center items-center mb-10 space-x-4">
        <span className={`text-sm ${billingCycle === 'onetime' ? 'font-bold' : 'text-gray-500'}`}>One-Time</span>
        <button 
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'onetime' : 'monthly')}
          className="relative w-14 h-7 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none"
        >
          <div className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform duration-200 ${billingCycle === 'monthly' ? 'translate-x-7' : ''}`} />
        </button>
        <span className={`text-sm ${billingCycle === 'monthly' ? 'font-bold' : 'text-gray-500'}`}>Monthly Sub</span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-gray-500">{billingCycle === 'monthly' ? '/mo' : ''}</span></div>
            
            <div className="space-y-3">
              <a href={plan.stripe} className="block w-full py-3 px-4 bg-black text-white text-center rounded-lg font-medium hover:bg-gray-800 transition">
                Pay with Card
              </a>
              <a href={plan.paypal} className="block w-full py-3 px-4 bg-[#FFC439] text-[#003087] text-center rounded-lg font-bold hover:bg-[#f2ba32] transition">
                PayPal
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
