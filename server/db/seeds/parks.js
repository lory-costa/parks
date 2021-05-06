exports.seed = (knex) => {
  return knex('parks').del()
    .then(() => {
      return knex('parks').insert([
        {
          id: 1,
          park_name: 'Dove-Myer Robinson Park',
          park_address: '85-87 Gladstone Road, Parnell',
          lat: -36.85227602744005,
          lon: 174.78638750071374,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=150',
          description: 'Named after Sir Dove-Myer Robinson, the popular and longest-serving (18 years) mayor of Auckland. The park is home to the Parnell Rose Gardens and the Nancy Steen Gardens. It is a festival of colour and scent as some 5000 rose bushes grow here. There are also several remarkable native trees, including the oldest manuka and largest pōhutukawa tree in Auckland.',
          image: './parkImages/doveMyerRobinson.jpg',
          playground: false,
          toilets: true,
          picnic_site: true,
          sports_field: false,
          tramp: false,
          dog_walking: true,
          approved: true
        },
        {
          id: 2,
          park_name: 'Mt Hobson Path',
          park_address: '229 Remuera Road, Remuera',
          lat: -36.878829301557715,
          lon: 174.78919514280219,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/aklpaths/Pages/path-detail.aspx?ItemId=394',
          description: 'Ōhinerau / Mt Hobson is one of the many volcanic maunga (mountains) in Auckland and you can get to it easily by bus or train – with the Remuera train station being a short ride from the city centre. Ōhinerau is an ancient Māori name for the maunga and means the place of Hinerau, goddess of whirlwinds. In pre-European times, this maunga was a large Māori pā (fortified village settlement) and it is estimated that around 1000 people lived on the pā at the height of its occupation. The pā had a single strong point at the tihi (summit), defended by large terraces which also held many houses, storehouses and storage pits.',
          image: './parkImages/mtHobsonPath.jpg',
          playground: false,
          toilets: false,
          picnic_site: false,
          sports_field: false,
          tramp: true,
          dog_walking: true,
          approved: true
        },
        {
          id: 3,
          park_name: 'Auckland Domain',
          park_address: '20 Park Road, Grafton',
          lat: -36.85852261988833,
          lon: 174.77567458879017,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=126#about',
          description: 'Auckland Domain is our oldest park and one of the largest. Developed on 75 hectares around the cone of an extinct volcano. The tuff rings created by volcanic activity can be seen in the land contours and forms a natural amphitheatre.',
          image: './parkImages/aucklandDomain.jpg',
          playground: false,
          toilets: true,
          picnic_site: true,
          sports_field: true,
          tramp: false,
          dog_walking: true,
          approved: true
        },
        {
          id: 4,
          park_name: 'Harbutt Reserve',
          park_address: '39 Harbutt Avenue, Mount Albert',
          lat: -36.887903380506295,
          lon: 174.70710812112182,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=1472#about',
          description: 'Named after Sir Dove-Myer Robinson, the popular and longest-serving (18 years) mayor of Auckland. The park is home to the Parnell Rose Gardens and the Nancy Steen Gardens. It is a festival of colour and scent as some 5000 rose bushes grow here. There are also several remarkable native trees, including the oldest manuka and largest pōhutukawa tree in Auckland.',
          image: './parkImages/harbuttReserve.jpg',
          playground: true,
          toilets: true,
          picnic_site: true,
          sports_field: true,
          tramp: true,
          dog_walking: true,
          approved: true
        },
        {
          id: 5,
          park_name: 'Onehunga Bay Reserve',
          park_address: '71-91 Beachcroft Avenue, Onehunga',
          lat: -36.92138378827514,
          lon: 174.7742681311679,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=143',
          description: 'This is a large open space and beach area. The reserve has opportunities for water sports on the lagoon, and a network of mostly accessible paths throughout the reserve and around the lagoon. Use the Taumanu Bridge over the motorway to get to Taumanu Reserve.',
          image: './parkImages/onehungaBayReserve.jpg',
          playground: true,
          toilets: true,
          picnic_site: true,
          sports_field: true,
          tramp: false,
          dog_walking: true,
          approved: true
        }
      ])
    })
}
