const dataExemple = [
  {
    country: 'UKRAINE',
    area: '603,628',
    population: '73.8'
  },
  {
    country: 'USA',
    area: '9,833,520',
    population: '33.6'
  },
  {
    country: 'POLAND',
    area: '312,696',
    population: '123'
  },
  {
    country: 'BELARUS',
    area: '207,595',
    population: '45.8'
  },
  {
    country: 'JAPAN',
    area: '377,975',
    population: '334'
  },
  {
    country: 'CANADA',
    area: '9,984,670',
    population: '3.92'
  }
];

let gridView = new GridView();
const data = {
  header: 'GridView Vidget on JavaScript',
  headerClass: ['header'],
  attribute: {
    'country': {
      'label': 'Country',
      'src': 'html', // если отсутствует будет выведен тег
    },
    'area': {
      'label': 'Total area (\u33A2)',
    },
    'population': {
      'label': 'Population (\u33A2)',
    }
  },
  data: dataExemple
};
gridView.showHeader();
gridView.showTable();