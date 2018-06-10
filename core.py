import pandas as pd
import numpy as np


class XSMomentum(object):
    def __init__(self, stock_prices, lookback_period, holding_period, sort_type, weight_type, benchmark_prices=None,
                 buckets=10, start='2010-01-01', end='2017-12-31'):
        self.stock_prices = stock_prices
        self.lookback_period = lookback_period
        self.holding_period = holding_period
        self.sort_type = sort_type
        self.weight_type = weight_type
        self.benchmark_returns = benchmark_prices
        self.buckets = buckets
        self.start = start
        self.end = end

    def compute_return_series(self):
        sorted_df = self._sort_return_series()
        weights_df = self._get_portfolio_weights()
        portfolio_df = sorted_df * weights_df
        return_series = portfolio_df.sum(axis=1)
        return return_series

    def _sort_return_series(self):
        if self.sort_type == 'total_return':
            result = {}
            past_return = self.stock_prices.pct_change(periods=self.lookback_period)
            fwd_return = self.stock_prices.pct_change(periods=-self.holding_period)

            for idx, row in past_return.iterrows():
                past_fwd = pd.DataFrame({'past': past_return.loc[idx], 'fwd': fwd_return.loc[idx]})
                # set fwd returns to nan where past returns were nan
                past_fwd.loc[past_fwd['past'].isnull(), 'fwd'] = np.nan
                past_fwd.sort_values(by='past')
                result[idx] = past_fwd['fwd'].values.tolist()

            result = pd.DataFrame(result).T
        elif self.sort_type == 'excess_return':
            raise NotImplementedError()
        elif self.sort_type == 'vol_adjusted':
            raise NotImplementedError()
        else:
            raise ValueError('Unknown sort type: {}'.format(self.sort_type))
        return result

    # todo(divir): account for nans in the end
    def _get_portfolio_weights(self):
        if self.weight_type == 'decile_equal_weighted':
            shape = self.stock_prices.shape
            decile_size = shape[1] / self.buckets
            weight_df = pd.DataFrame(0., index=self.stock_prices.index, columns=self.stock_prices.columns)
            weight_df.loc[:, :decile_size] = -1.
            if decile_size > 0:
                weight_df.loc[:, -decile_size:] = 1.
        elif self.weight_type == 'decile_vol_weighted':
            raise NotImplementedError()
        elif self.weight_type == 'zscore_rank':
            raise NotImplementedError()
        else:
            raise ValueError('Unknown weight type: {}'.format(self.weight_type))
        weight_df.columns = range(weight_df.shape[1])
        return weight_df

    def compute_return_matrix(self):
        pass

    def compute_vol_matrix(self):
        pass

    def compute_alpha_matrix(self):
        pass

    def get_quantiles(self):
        pass

    def get_event_study(self):
        pass

    def get_smile_plot(self):
        pass

    def get_return_heatmap(self):
        pass

