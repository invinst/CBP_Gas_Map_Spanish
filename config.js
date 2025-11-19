var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1IjoiaW52aXNpYmxlaW5zdGl0dXRlIiwiYSI6ImNtaTZkcTBhbTExc3cya281aXFxdGoxbWoifQ.pbiXb91JnksEeQNi1ypzNw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Nueve salas de redacción de Chicago y periodistas independientes revisaron decenas de videos y fotos sobre el ' +
            'uso de gas lacrimógeno y gas pimienta por parte de agentes federales de inmigración durante la Operación Midway Blitz. <br><br> ' +
            'Nuestra investigación encontró que los agentes usaron armas químicas contra manifestantes al menos 49 veces en 18 incidentes desde ' +
            'el 1 de octubre. <br><br> Al menos 30 de estos casos ocurrieron después de que un juez impusiera restricciones al uso de ' +
            'gas lacrimógeno y gas pimienta por parte de los agentes.', 
            location: {
                center: [-87.623177, 41.881832],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location1',
            alignment: 'right',
            hidden: false,
            title: '3 de octubre',
            address: '3566 W. Armitage',
            image: 'visuals/location1.webp',
            credit: 'Andrew Denton para Block Club Chicago',
            description: 'Un agente lanzó un bote de gas lacrimógeno cerca de Armitage y Central Park, a menos de una cuadra de una escuela primaria.', 
            location: {
                center: [-87.716162, 41.917561],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location2',
            alignment: 'right',
            hidden: false,
            title: '4 de octubre',
            address: '39th Pl. y Kedzie Ave.',
            image: 'visuals/location2.jpeg',
            credit: 'Daniel Delgado',
            description: 'Los agentes dispararon 3 bolas de gas pimienta tres veces y lanzaron al menos 12 botes de gas lacrimógeno ' +
            'contra manifestantes que se habían reunido después de que un agente disparara a una mujer que los seguía en su auto.',
            location: {
                center: [-87.704500, 41.821944],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location3',
            alignment: 'right',
            hidden: false,
            title: '4 de octubre',
            address: 'Cermak y Rockwell',
            image: '',
            description: 'Un agente usó gas pimienta una vez contra una manifestante. El rocío también pareció alcanzar a transeúntes.',
            location: {
                center: [-87.690556, 41.851944],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location4',
            alignment: 'right',
            hidden: false,
            title: '7 de octubre',
            address: 'Concordia Cemetery, Forest Park',
            image: '',
            description: 'Agentes dispararon bolas de gas pimienta contra trabajadores de un cementerio que se negaron a permitirles el acceso a propiedad privada.',
            location: {
                center: [-87.825111, 41.875361],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location5',
            alignment: 'right',
            hidden: false,
            title: '12 de octubre',
            address: 'Sawyer y Wilson',
            image: 'visuals/location5.jpeg',
            credit: 'Proporcionado a Block Club Chicago ',
            description: 'Un agente lanzó un bote de gas lacrimógeno contra una multitud de manifestantes en Albany Park.',
            location: {
                center: [-87.709629, 41.964662],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location6',
            alignment: 'right',
            hidden: false,
            title: '14 de octubre',
            address: '105th y Avenue N',
            image: 'visuals/location6.jpg',
            credit: 'Matthew Kaplan/Block Club Chicago',
            description: 'Los agentes lanzaron al menos seis botes de gas lacrimógeno contra una multitud que se reunió ' +
            'después de que agentes embistieran un auto durante una persecución. Algunas personas en la multitud lanzaron ' +
            'objetos antes de que los agentes usaran gas por primera vez.',
            location: {
                center: [-87.538914, 41.704595],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location7',
            alignment: 'right',
            hidden: false,
            title: '22 de octubre',
            address: '26th y Ogden Ave, Cicero',
            image: '',
            description: 'Un agente roció gas pimienta contra una multitud de manifestantes y transeúntes a través de la ventana de una camioneta que se alejaba.',
            location: {
                center: [-87.741637, 41.844327],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location8',
            alignment: 'right',
            hidden: false,
            title: '23 de octubre',
            address: '27th y Whipple',
            video: 'visuals/location8.mp4',
            credit: 'Block Club Chicago',
            description: 'Agentes dispararon bolas de gas pimienta y usaron al menos cuatro botes de gas lacrimógeno contra ' +
            'una multitud. El jefe de la Patrulla Fronteriza, Greg Bovino, estuvo entre los agentes vistos lanzando gas.',
            location: {
                center: [-87.701314, 41.842737],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location9',
            alignment: 'right',
            hidden: false,
            title: '24 de octubre',
            address: '3310 N. Lakewood',
            video: 'visuals/location9.mp4',
            credit: 'Proporcionado a Block Club Chicago',
            description: 'Después de que una multitud se reuniera alrededor de agentes que habían detenido a un ' +
            'trabajador en una calle residencial de Lakeview, los agentes lanzaron al menos cuatro botes de gas ' +
            'lacrimógeno antes de irse.',
            location: {
                center: [-87.661461, 41.942044],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location10',
            alignment: 'right',
            hidden: false,
            title: '25 de octubre',
            address: 'Kildare y Grace',
            video: 'visuals/location10.mp4',
            credit: 'Proporcionado a Block Club Chicago',
            description: 'Agentes lanzaron al menos un bote de gas lacrimógeno en Old Irving Park después de que vecinos se reunieran para protestar.',
            location: {
                center: [-87.735334, 41.949931],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location11',
            alignment: 'right',
            hidden: false,
            title: '25 de octubre',
            address: 'Roscoe y Harding',
            image: '',
            description: 'Agentes lanzaron dos botes de gas lacrimógeno en medio de una cuadra residencial en Avondale después de que manifestantes los siguieran y les gritaran.',
            location: {
                center: [-87.726072, 41.942741],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location12',
            alignment: 'right',
            hidden: false,
            title: '29 de octubre',
            address: '634 E New York St, Aurora',
            image: '',
            description: 'En Aurora, un agente disparó bolas de gas pimienta contra un vehículo cuyo conductor los había seguido hasta el estacionamiento de una tienda de comestibles.',
            location: {
                center: [-88.301843, 41.754336],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
            ]
        },
        {
            id: 'location13',
            alignment: 'right',
            hidden: false,
            title: '31 de octubre',
            address: '3213 W. Lawrence',
            image: 'visuals/location13.jpeg',
            credit: 'Colin Boyle/Block Club Chicago',
            description: 'Un agente disparó bolas de gas pimienta al suelo cerca de manifestantes que se habían reunido después de que agentes sometieran a un hombre en una acera de Albany Park.',
            location: {
                center: [-87.70875, 41.96846],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location14',
            alignment: 'right',
            hidden: false,
            title: '31 de octubre',
            address: '508 Asbury Avenue, Evanston',
            image: '',
            description: 'Una multitud se reunió después de que agentes en una camioneta chocaran con un miembro de un equipo ' +
            'de respuesta rápida que los seguía en un auto. Un agente usó gas pimienta una vez contra los manifestantes.',
            location: {
                center: [-87.69008, 42.02699],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location15',
            alignment: 'right',
            hidden: false,
            title: '6 de noviembre',
            address: 'La Villita (ubicación exacta desconocida)',
            image: '',
            description: 'Agentes dispararon al menos una bola de gas pimienta hacia la puerta del conductor abierta de una camioneta estacionada con una persona adentro.',
            location: {
                center: [-87.714784, 41.844390],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location16',
            alignment: 'right',
            hidden: false,
            title: '8 de noviembre',
            address: '26th y Ogden, Cicero',
            video: 'visuals/location16.mp4',
            credit: 'Proporcionado a Block Club Chicago',
            description: 'Un agente que conducía una camioneta roció gas pimienta a través de la ventana abierta del lado del conductor de un vehículo en movimiento, alcanzando al conductor y a su hija de un año que iba en el asiento trasero.',
            location: {
                center: [-87.74263, 41.84300],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location17',
            alignment: 'right',
            hidden: false,
            title: '8 de noviembre',
            address: 'Ogden y Damen',
            video: 'visuals/location17.mp4',
            credit: 'Matthew Boelkins, edición por Sebastían Hidalgo',
            description: 'Agentes en un vehículo en movimiento parecen lanzar gas pimienta hacia otro vehículo en movimiento antes de alejarse.',
            location: {
                center: [-87.676361, 41.872860],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'location18',
            alignment: 'right',
            hidden: false,
            title: '8 de noviembre',
            address: '26th y Kedzie',
            image: '',
            description: 'Agentes lanzaron dos botes de gas lacrimógeno contra una multitud de manifestantes en La Villita.',
            location: {
                center: [-87.705036, 41.844559],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        
        
    ]
};
