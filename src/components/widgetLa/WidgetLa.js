import React from 'react';
import './WidgetLa.css';

const WidgetLa = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type} </button>;
  };

  return (
    <div className="widgetLa">
      <h3 className="widgetLgTitle">Latest transaction</h3>
      <div className="tableWidgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">SUsan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">SUsan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">SUsan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined"></Button>
          </td>
        </tr>
      </div>
    </div>
  );
};

export default WidgetLa;
