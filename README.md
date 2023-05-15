# React Histogram Visualization

This is a React application that fetches data from a text file, analyzes the word frequencies, and displays a histogram visualization using the Recharts library. The application allows exporting the histogram data as a CSV file.

## Components

The application consists of the following components:

- `Button1`: This component fetches the text data, calculates word frequencies, and displays the histogram visualization. It also provides a button to export the histogram data as a CSV file.

## Libraries and Plugins Used

The following libraries and plugins are used in this project:

- React: A JavaScript library for building user interfaces.
- Axios: A popular HTTP client for making asynchronous requests.
- Recharts: A charting library for React that provides a set of customizable and interactive charts.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

The application will be accessible at `http://localhost:3000`.

## Usage

1. Click the "Submit" button to fetch the text data from the provided URL and calculate the word frequencies.
2. The top 20 words with the highest frequencies will be displayed as a bar chart using Recharts.
3. If there is data available, an "Export" button will be shown. Clicking this button will download a CSV file containing the word frequencies.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
