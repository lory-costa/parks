exports.seed = (knex) => {
  return knex('parks').del()
    .then(() => {
      return knex('parks').insert([
        {
          id: 1,
          name: 'Dove-Myer Robinson Park',
          address: '85-87 Gladstone Road, Parnell',
          lat: -36.85024591664261,
          lon: 174.78678568198526,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=150',
          description: 'Named after Sir Dove-Myer Robinson, the popular and longest-serving (18 years) mayor of Auckland. The park is home to the Parnell Rose Gardens and the Nancy Steen Gardens. It is a festival of colour and scent as some 5000 rose bushes grow here. There are also several remarkable native trees, including the oldest manuka and largest pōhutukawa tree in Auckland.',
          image: 'https://res.cloudinary.com/dvsikj1gh/image/upload/v1620789885/Public/parkImages/cj6cbnq97yprvqno2l2s.jpg',
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
          name: 'Mt Hobson Path',
          address: '229 Remuera Road, Remuera',
          lat: -36.879728397135764,
          lon: 174.78662647830797,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/aklpaths/Pages/path-detail.aspx?ItemId=394',
          description: 'Ōhinerau / Mt Hobson is one of the many volcanic maunga (mountains) in Auckland and you can get to it easily by bus or train – with the Remuera train station being a short ride from the city centre. Ōhinerau is an ancient Māori name for the maunga and means the place of Hinerau, goddess of whirlwinds. In pre-European times, this maunga was a large Māori pā (fortified village settlement) and it is estimated that around 1000 people lived on the pā at the height of its occupation. The pā had a single strong point at the tihi (summit), defended by large terraces which also held many houses, storehouses and storage pits.',
          image: 'https://res.cloudinary.com/dvsikj1gh/image/upload/v1620789915/Public/parkImages/sjsq5iocs9fuc576nq0h.jpg',
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
          name: 'Auckland Domain',
          address: '20 Park Road, Grafton',
          lat: -36.858980359465335,
          lon: 174.77540291764933,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=126#about',
          description: 'Auckland Domain is our oldest park and one of the largest. Developed on 75 hectares around the cone of an extinct volcano. The tuff rings created by volcanic activity can be seen in the land contours and forms a natural amphitheatre.',
          image: 'https://res.cloudinary.com/dvsikj1gh/image/upload/v1620789956/Public/parkImages/hyqifmcsbz20zi0riq56.jpg',
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
          name: 'Harbutt Reserve',
          address: '39 Harbutt Avenue, Mount Albert',
          lat: -36.88805388064129,
          lon: 174.70548270253622,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=1472#about',
          description: 'Named after Sir Dove-Myer Robinson, the popular and longest-serving (18 years) mayor of Auckland. The park is home to the Parnell Rose Gardens and the Nancy Steen Gardens. It is a festival of colour and scent as some 5000 rose bushes grow here. There are also several remarkable native trees, including the oldest manuka and largest pōhutukawa tree in Auckland.',
          image: 'https://res.cloudinary.com/dvsikj1gh/image/upload/v1620790116/Public/parkImages/uimpo78wfkveadnnhpp2.jpg',
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
          name: 'Onehunga Bay Reserve',
          address: '71-91 Beachcroft Avenue, Onehunga',
          lat: -36.92460755108187,
          lon: 174.77710321195158,
          council_url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=143',
          description: 'This is a large open space and beach area. The reserve has opportunities for water sports on the lagoon, and a network of mostly accessible paths throughout the reserve and around the lagoon. Use the Taumanu Bridge over the motorway to get to Taumanu Reserve.',
          image: 'https://res.cloudinary.com/dvsikj1gh/image/upload/v1620790543/Public/parkImages/xgx6qzrvl99qpb7vnsar.jpg',
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
