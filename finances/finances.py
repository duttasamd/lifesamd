from alpha_vantage.timeseries import TimeSeries
import json

# Your key here
key = '3NEB8W78IVSKFAOX'
ts = TimeSeries(key)
nifty, meta = ts.get_daily(symbol='^NSEI')

with open('nifty.json', 'w') as outfile:
    json.dump(nifty, outfile)

print(nifty)