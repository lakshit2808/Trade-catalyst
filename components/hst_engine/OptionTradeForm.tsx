'use client'
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alert from '../utils/alert/Alert';




const OptionTradeForm = () => {
  const [maxLoss, setMaxLoss] = useState<number | null>(null);
  const [maxProfit, setMaxProfit] = useState<number | null>(null);

  const handleSubmit = (values: any) => {
    // Calculate max loss and max profit based on inputs
    const entryPrice = parseFloat(values.entryPrice);
    const stopLoss = parseFloat(values.stopLoss);
    const takeProfit = parseFloat(values.takeProfit);

    if (!isNaN(entryPrice) && !isNaN(stopLoss) && !isNaN(takeProfit)) {
      const maxLossValue = (entryPrice - stopLoss) * 100; // Adjust this calculation based on your formula
      const maxProfitValue = (takeProfit - entryPrice) * 100; // Adjust this calculation based on your formula
      setMaxLoss(maxLossValue);
      setMaxProfit(maxProfitValue);
    }
  };

  const initialValues = {
    broker: 'Zerodha',
    configuration: 'Index Based Configuration',
    entryPrice: '',
    stopLoss: '',
    takeProfit: '',
    strikePrice: 'ITM-2',
    positionType: 'Buy',
    contractType: 'Put',
  };

  const validationSchema = Yup.object().shape({
    entryPrice: Yup.number().required('Entry Price is required'),
    stopLoss: Yup.number().required('Stop Loss is required'),
    takeProfit: Yup.number().required('Take Profit is required'),
  });

  const brokerOptions = ['Zerodha', 'Fyers', 'Angelone'];
  const configurationOptions = ['Index Based Configuration', 'Option Premium Based Configuration'];
  const strikePriceOptions = ['ITM-2', 'ITM-1', 'ATM', 'OTM-1', 'OTM-2'];
  const positionTypeOptions = ['Buy', 'Sell'];
  const contractTypeOptions = ['Put', 'Call'];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="option-trade-form">
          <div className="form-group">
            <label htmlFor="broker">Select Broker</label>
            <Field as="select" id="broker" name="broker">
              {brokerOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <label htmlFor="configuration">Select Configuration</label>
            <Field as="select" id="configuration" name="configuration">
              {configurationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <label htmlFor="entryPrice">Entry Price</label>
            <Field type="number" id="entryPrice" name="entryPrice" />
          </div>

          <div className="form-group">
            <label htmlFor="stopLoss">Stop Loss</label>
            <Field type="number" id="stopLoss" name="stopLoss" />
          </div>

          <div className="form-group">
            <label htmlFor="takeProfit">Take Profit</label>
            <Field type="number" id="takeProfit" name="takeProfit" />
          </div>

          <div className="form-group">
            <label htmlFor="strikePrice">Strike Price</label>
            <Field as="select" id="strikePrice" name="strikePrice">
              {strikePriceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <label htmlFor="positionType">Position Type</label>
            <Field as="select" id="positionType" name="positionType">
              {positionTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <label htmlFor="contractType">Contract Type</label>
            <Field as="select" id="contractType" name="contractType">
              {contractTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <strong>Max Loss:</strong> {maxLoss !== null ? `₹${maxLoss}` : 'N/A'}
          </div>
          <div className="form-group">
            <strong>Max Profit:</strong> {maxProfit !== null ? `₹${maxProfit}` : 'N/A'}
          </div>

          <div className="form-group">
            <button type="submit">Calculate Max Loss/Profit</button>
          </div>

          <div className="form-group">
            <button type="button" onClick={() => {
              // Return an object of all inputs when the "Configure" button is clicked
              const values = {
                ...initialValues,
                maxLoss,
                maxProfit,
              };
              console.log(JSON.stringify(values, null, 2)); // You can adjust how you want to handle this data
              alert("HST Engine Has been Configured")
            }}>
              Configure
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OptionTradeForm;
