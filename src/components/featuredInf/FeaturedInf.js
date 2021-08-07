import React from 'react';
import './FeaturedInf.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInf = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,414</span>
          <span className="featuredRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,414</span>
          <span className="featuredRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$12,41</span>
          <span className="featuredRate">
            +21.4 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
};

export default FeaturedInf;
