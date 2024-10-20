import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from pickle import load

# Load the saved model
filename = 'finalized_model_multivariate.sav'
loaded_model = load(open(filename, 'rb'))

# Define the new input data as a dictionary
new_data_dict = {
    'Relative Compactness': [0.98],
    'Surface Area': [600],
    'Roof Area': [120],
    'Overall Height': [20],
    'Orientation':  [135],
    'Glazing Area':  [23],
    'Glazing Area Distribution': [7]
}

# Convert the dictionary to a DataFrame
new_data_df = pd.DataFrame(new_data_dict)

# Refit the scaler on the original training data (assuming you have it in X_train)
# Here you need to re-load or re-create X_train (the original training data)
X_train = pd.read_csv('EPB_data.csv')  # Example of re-loading the training data
X_train = X_train.drop(columns=['Heating Load'])  # Adjust if necessary

# Fit the scaler on the training data
scaler = MinMaxScaler()
scaler.fit(X_train)

# Now transform the new data
new_X_scaled = scaler.transform(new_data_df)

# Make predictions using the loaded model
predictions = loaded_model.predict(new_X_scaled)

# Output the predictions
print("Predicted Heating Load:", predictions)
