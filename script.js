// ============================================================
// BASE DE DATOS DE MÚSCULOS
// ============================================================
const musculos = [
    { "nombre": "Bíceps braquial", "region": "Miembro torácico", "ubicacion": "Cara craneal del brazo", "descripcion": "Músculo fusiforme que se origina en la escápula y se inserta en el radio", "inervacion": "Nervio musculocutáneo", "funcion": "Flexor de la articulación del codo" },
    { "nombre": "Tríceps braquial", "region": "Miembro torácico", "ubicacion": "Cara caudal del brazo", "descripcion": "Músculo con tres cabezas (larga, lateral y medial) que convergen en el olécranon", "inervacion": "Nervio radial", "funcion": "Extensor del codo" },
    { "nombre": "Deltoides", "region": "Miembro torácico", "ubicacion": "Cara lateral del hombro", "descripcion": "Músculo triangular desde la escápula hasta el húmero", "inervacion": "Nervio axilar", "funcion": "Abductor y flexor del hombro" },
    { "nombre": "Supraespinoso", "region": "Miembro torácico", "ubicacion": "Fosa supraespinosa de la escápula", "descripcion": "Músculo que recorre la fosa supraespinosa hasta el tubérculo mayor del húmero", "inervacion": "Nervio supraescapular", "funcion": "Extensor del hombro" },
    { "nombre": "Infraespinoso", "region": "Miembro torácico", "ubicacion": "Fosa infraespinosa de la escápula", "descripcion": "Músculo grueso que se inserta en el tubérculo mayor del húmero", "inervacion": "Nervio supraescapular", "funcion": "Abductor y rotador externo del hombro" },
    { "nombre": "Redondo mayor", "region": "Miembro torácico", "ubicacion": "Caudal a la escápula, desde su ángulo caudal hasta la cresta del húmero", "descripcion": "Músculo alargado y redondeado", "inervacion": "Nervio axilar", "funcion": "Aductor y flexor del hombro" },
    { "nombre": "Subescapular", "region": "Miembro torácico", "ubicacion": "Cara medial de la escápula (fosa subescapular)", "descripcion": "Músculo ancho y plano, de forma triangular", "inervacion": "Nervio subescapular", "funcion": "Aductor y rotador interno del hombro" },
    { "nombre": "Coracobraquial", "region": "Miembro torácico", "ubicacion": "Cara medial del brazo, desde la apófisis coracoides hasta el húmero", "descripcion": "Músculo pequeño y alargado", "inervacion": "Nervio musculocutáneo", "funcion": "Aductor del hombro" },
    { "nombre": "Braquial", "region": "Miembro torácico", "ubicacion": "Cara caudal del húmero, desde su cuello hasta la tuberosidad del radio", "descripcion": "Músculo ancho que cubre la cara caudal del húmero", "inervacion": "Nervio musculocutáneo y radial", "funcion": "Flexor del codo" },
    { "nombre": "Ancóneo", "region": "Miembro torácico", "ubicacion": "Cara lateral del codo, desde el epicóndilo lateral hasta el olécranon", "descripcion": "Músculo pequeño y triangular", "inervacion": "Nervio radial", "funcion": "Extensor del codo" },
    { "nombre": "Extensor carpo radial", "region": "Miembro torácico", "ubicacion": "Cara craneolateral del antebrazo", "descripcion": "Músculo fusiforme que se origina en el epicóndilo lateral del húmero", "inervacion": "Nervio radial", "funcion": "Extensor del carpo y flexor del codo" },
    { "nombre": "Extensor común de los dedos", "region": "Miembro torácico", "ubicacion": "Cara lateral del antebrazo", "descripcion": "Músculo largo que se divide en varios tendones hacia los dedos", "inervacion": "Nervio radial", "funcion": "Extensor del carpo y de los dedos" },
    { "nombre": "Extensor lateral de los dedos", "region": "Miembro torácico", "ubicacion": "Cara lateral del antebrazo, caudal al extensor común", "descripcion": "Músculo más pequeño que el extensor común", "inervacion": "Nervio radial", "funcion": "Extensor de los dedos (principalmente el quinto)" },
    { "nombre": "Flexor carpo radial", "region": "Miembro torácico", "ubicacion": "Cara medial del antebrazo", "descripcion": "Músculo fusiforme desde el epicóndilo medial hasta el metacarpo", "inervacion": "Nervio mediano", "funcion": "Flexor del carpo" },
    { "nombre": "Flexor carpo cubital", "region": "Miembro torácico", "ubicacion": "Cara caudal del antebrazo", "descripcion": "Músculo con cabeza cubital y humeral", "inervacion": "Nervio cubital", "funcion": "Flexor del carpo" },
    { "nombre": "Flexor superficial de los dedos (torácico)", "region": "Miembro torácico", "ubicacion": "Cara caudal del antebrazo, profundo", "descripcion": "Músculo con dos cabezas, sus tendones perforan los del flexor profundo", "inervacion": "Nervio mediano y cubital", "funcion": "Flexor de los dedos (segunda falange)" },
    { "nombre": "Flexor profundo de los dedos (torácico)", "region": "Miembro torácico", "ubicacion": "Cara caudal del antebrazo, el más profundo", "descripcion": "Músculo potente con tres cabezas (humeral, cubital y radial)", "inervacion": "Nervio mediano y cubital", "funcion": "Flexor de los dedos (tercera falange)" },
    { "nombre": "Pronador redondo", "region": "Miembro torácico", "ubicacion": "Cara medial del antebrazo, superficial", "descripcion": "Músculo corto desde el epicóndilo medial hasta el radio", "inervacion": "Nervio mediano", "funcion": "Pronador del antebrazo" },
    { "nombre": "Supinador", "region": "Miembro torácico", "ubicacion": "Cara lateral del antebrazo, profundo", "descripcion": "Músculo pequeño desde el epicóndilo lateral hasta el radio", "inervacion": "Nervio radial", "funcion": "Supinador del antebrazo" },
    { "nombre": "Abductor largo del pulgar", "region": "Miembro torácico", "ubicacion": "Cara dorsolateral del antebrazo distal", "descripcion": "Músculo alargado que se origina en el radio y cúbito", "inervacion": "Nervio radial", "funcion": "Abductor del pulgar y flexor del carpo" },
    { "nombre": "Glúteo medio", "region": "Miembro pélvico", "ubicacion": "Cara lateral de la cadera", "descripcion": "Músculo grande desde el ilion hasta el trocánter mayor del fémur", "inervacion": "Nervio glúteo craneal", "funcion": "Abductor y extensor de la cadera" },
    { "nombre": "Glúteo superficial", "region": "Miembro pélvico", "ubicacion": "Caudal al glúteo medio, más superficial", "descripcion": "Músculo más pequeño, desde la apófisis sacra hasta el tercer trocánter", "inervacion": "Nervio glúteo caudal", "funcion": "Abductor y extensor de la cadera" },
    { "nombre": "Glúteo profundo", "region": "Miembro pélvico", "ubicacion": "Profundo al glúteo medio", "descripcion": "Músculo pequeño desde el ilion hasta el trocánter mayor", "inervacion": "Nervio glúteo craneal", "funcion": "Abductor y rotador interno de la cadera" },
    { "nombre": "Bíceps femoral", "region": "Miembro pélvico", "ubicacion": "Cara lateral del muslo", "descripcion": "Músculo largo y ancho, con dos cabezas (vertebral y pélvica)", "inervacion": "Nervio ciático", "funcion": "Extensor de la cadera y flexor de la rodilla" },
    { "nombre": "Semitendinoso", "region": "Miembro pélvico", "ubicacion": "Cara caudal del muslo, medial al bíceps femoral", "descripcion": "Músculo alargado que termina en un tendón largo", "inervacion": "Nervio ciático", "funcion": "Extensor de la cadera, flexor de la rodilla" },
    { "nombre": "Semimembranoso", "region": "Miembro pélvico", "ubicacion": "Cara caudal del muslo, medial al semitendinoso", "descripcion": "Músculo ancho y plano, más grueso que el semitendinoso", "inervacion": "Nervio ciático", "funcion": "Extensor de la cadera y aductor del muslo" },
    { "nombre": "Cuádriceps femoral", "region": "Miembro pélvico", "ubicacion": "Cara craneal del muslo", "descripcion": "Músculo potente con cuatro cabezas: recto femoral, vasto lateral, vasto medial y vasto intermedio", "inervacion": "Nervio femoral", "funcion": "Extensor de la rodilla" },
    { "nombre": "Recto femoral", "region": "Miembro pélvico", "ubicacion": "Cara craneal del muslo, superficial", "descripcion": "Cabeza del cuádriceps que se origina en el ilion", "inervacion": "Nervio femoral", "funcion": "Extensor de la rodilla y flexor de la cadera" },
    { "nombre": "Vasto lateral", "region": "Miembro pélvico", "ubicacion": "Cara lateral del muslo", "descripcion": "Cabeza del cuádriceps desde el fémur", "inervacion": "Nervio femoral", "funcion": "Extensor de la rodilla" },
    { "nombre": "Vasto medial", "region": "Miembro pélvico", "ubicacion": "Cara medial del muslo", "descripcion": "Cabeza del cuádriceps desde el fémur", "inervacion": "Nervio femoral", "funcion": "Extensor de la rodilla" },
    { "nombre": "Sartorio", "region": "Miembro pélvico", "ubicacion": "Cara medial del muslo, superficial", "descripcion": "Músculo largo y delgado, desde el ilion hasta la tibia", "inervacion": "Nervio femoral", "funcion": "Aductor del muslo y flexor de la rodilla" },
    { "nombre": "Gracilis", "region": "Miembro pélvico", "ubicacion": "Cara medial del muslo, caudal al sartorio", "descripcion": "Músculo plano y ancho", "inervacion": "Nervio obturador", "funcion": "Aductor del muslo y extensor de la rodilla" },
    { "nombre": "Pectíneo", "region": "Miembro pélvico", "ubicacion": "Cara medial del muslo, cerca de la ingle", "descripcion": "Músculo pequeño desde el pubis hasta el fémur", "inervacion": "Nervio obturador y femoral", "funcion": "Aductor del muslo" },
    { "nombre": "Aductor mayor", "region": "Miembro pélvico", "ubicacion": "Cara medial del muslo, profundo al gracilis", "descripcion": "Músculo grande desde la pelvis hasta el fémur", "inervacion": "Nervio obturador", "funcion": "Aductor del muslo" },
    { "nombre": "Tensor de la fascia lata", "region": "Miembro pélvico", "ubicacion": "Cara craneolateral del muslo, superficial", "descripcion": "Músculo aplanado que se continúa con la fascia lata", "inervacion": "Nervio glúteo craneal", "funcion": "Tensor de la fascia lata, flexor de la cadera y extensor de la rodilla" },
    { "nombre": "Tibial craneal", "region": "Miembro pélvico", "ubicacion": "Cara craneolateral de la pierna", "descripcion": "Músculo fusiforme desde la tibia hasta el metatarso", "inervacion": "Nervio peroneo profundo", "funcion": "Flexor del tarso y extensor de los dedos" },
    { "nombre": "Extensor largo de los dedos", "region": "Miembro pélvico", "ubicacion": "Cara craneal de la pierna, lateral al tibial craneal", "descripcion": "Músculo largo que se divide en tendones hacia los dedos", "inervacion": "Nervio peroneo profundo", "funcion": "Extensor de los dedos y flexor del tarso" },
    { "nombre": "Peroneo largo", "region": "Miembro pélvico", "ubicacion": "Cara lateral de la pierna", "descripcion": "Músculo que rodea el maléolo lateral", "inervacion": "Nervio peroneo superficial", "funcion": "Flexor del tarso y pronador del pie" },
    { "nombre": "Gastrocnemio", "region": "Miembro pélvico", "ubicacion": "Cara caudal de la pierna, forma la pantorrilla", "descripcion": "Músculo grande con dos cabezas que se unen en el tendón de Aquiles", "inervacion": "Nervio tibial", "funcion": "Extensor del tarso y flexor de la rodilla" },
    { "nombre": "Sóleo", "region": "Miembro pélvico", "ubicacion": "Profundo al gastrocnemio", "descripcion": "Músculo plano que también contribuye al tendón calcáneo", "inervacion": "Nervio tibial", "funcion": "Extensor del tarso" },
    { "nombre": "Flexor superficial de los dedos (pélvico)", "region": "Miembro pélvico", "ubicacion": "Cara caudal de la pierna, entre el gastrocnemio y el flexor profundo", "descripcion": "Músculo que da origen al tendón plantar", "inervacion": "Nervio tibial", "funcion": "Flexor de los dedos (segunda falange)" },
    { "nombre": "Flexor profundo de los dedos (pélvico)", "region": "Miembro pélvico", "ubicacion": "Cara caudal de la pierna, el más profundo", "descripcion": "Compuesto por el flexor largo lateral, flexor largo medial y el tibial caudal", "inervacion": "Nervio tibial", "funcion": "Flexor de los dedos (tercera falange)" },
    { "nombre": "Poplíteo", "region": "Miembro pélvico", "ubicacion": "Cara caudal de la rodilla, profundo", "descripcion": "Músculo pequeño y triangular", "inervacion": "Nervio tibial", "funcion": "Flexor y rotador medial de la rodilla" },
    { "nombre": "Piriforme", "region": "Miembro pélvico", "ubicacion": "Cara caudal de la cadera, profundo al glúteo medio", "descripcion": "Músculo pequeño desde el sacro hasta el trocánter mayor", "inervacion": "Nervio ciático", "funcion": "Rotador externo y abductor de la cadera" },
    { "nombre": "Temporal", "region": "Cabeza", "ubicacion": "Fosa temporal del cráneo", "descripcion": "Músculo potente, en forma de abanico", "inervacion": "Nervio mandibular (rama del trigémino)", "funcion": "Elevador de la mandíbula (cierre de la boca)" },
    { "nombre": "Masetero", "region": "Cabeza", "ubicacion": "Cara lateral de la rama mandibular", "descripcion": "Músculo grueso con dos porciones (superficial y profunda)", "inervacion": "Nervio mandibular", "funcion": "Elevador de la mandíbula" },
    { "nombre": "Pterigoideo medial", "region": "Cabeza", "ubicacion": "Cara medial de la rama mandibular", "descripcion": "Músculo cuadrangular", "inervacion": "Nervio mandibular", "funcion": "Elevador y protrusor de la mandíbula" },
    { "nombre": "Pterigoideo lateral", "region": "Cabeza", "ubicacion": "Fosa pterigopalatina, medial al arco cigomático", "descripcion": "Músculo pequeño", "inervacion": "Nervio mandibular", "funcion": "Protrusor y lateralesor de la mandíbula" },
    { "nombre": "Digástrico", "region": "Cabeza", "ubicacion": "Desde la apófisis paracondilar hasta el hueso hioides y mandíbula", "descripcion": "Músculo con dos vientres (rostral y caudal)", "inervacion": "Nervio mandibular (vientre rostral) y nervio facial (vientre caudal)", "funcion": "Depresor de la mandíbula (abre la boca)" },
    { "nombre": "Miloideo", "region": "Cabeza", "ubicacion": "Cara medial de la mandíbula, forma el piso de la boca", "descripcion": "Músculo plano y delgado", "inervacion": "Nervio mandibular", "funcion": "Eleva el piso de la boca y la lengua" },
    { "nombre": "Geniohioideo", "region": "Cabeza", "ubicacion": "Desde la sínfisis mandibular hasta el hueso hioides", "descripcion": "Músculo largo y delgado", "inervacion": "Nervio hipogloso", "funcion": "Protrusión de la lengua y estabilización del hioides" },
    { "nombre": "Esternohioideo", "region": "Cuello", "ubicacion": "Ventral en el cuello, desde el esternón hasta el hioides", "descripcion": "Músculo largo y delgado", "inervacion": "Asa cervical (nervio hipogloso)", "funcion": "Retrae el hioides y la lengua" },
    { "nombre": "Esternotiroideo", "region": "Cuello", "ubicacion": "Profundo al esternohioideo, desde el esternón hasta el cartílago tiroides", "descripcion": "Músculo aplanado", "inervacion": "Asa cervical", "funcion": "Depresor de la laringe" },
    { "nombre": "Tirohioideo", "region": "Cuello", "ubicacion": "Desde el cartílago tiroides hasta el hioides", "descripcion": "Músculo pequeño", "inervacion": "Nervio hipogloso", "funcion": "Eleva la laringe" },
    { "nombre": "Omohioideo", "region": "Cuello", "ubicacion": "Desde la escápula hasta el hioides, pasa lateral a la tráquea", "descripcion": "Músculo delgado con dos vientres", "inervacion": "Asa cervical", "funcion": "Retrae el hioides" },
    { "nombre": "Braquiocefálico", "region": "Cuello", "ubicacion": "Desde la cabeza hasta el brazo, lateral en el cuello", "descripcion": "Músculo largo que forma el borde yugular", "inervacion": "Nervio accesorio y ramas cervicales", "funcion": "Flexor lateral del cuello y extensor del hombro" },
    { "nombre": "Esternocefálico", "region": "Cuello", "ubicacion": "Ventral desde el esternón hasta la apófisis mastoides", "descripcion": "Músculo par, superficial", "inervacion": "Ramas ventrales de nervios cervicales", "funcion": "Flexor ventral del cuello" },
    { "nombre": "Esternomastoideo", "region": "Cuello", "ubicacion": "Parte del esternocefálico que va al mastoides", "descripcion": "Frecuentemente fusionado con el esternocefálico", "inervacion": "Nervio accesorio", "funcion": "Rotación y flexión lateral del cuello" },
    { "nombre": "Romboides", "region": "Tronco", "ubicacion": "Desde la línea media del dorso hasta el borde medial de la escápula", "descripcion": "Músculo plano, profundo al trapecio", "inervacion": "Nervios torácicos dorsales", "funcion": "Eleva y fija la escápula al tronco" },
    { "nombre": "Trapecio", "region": "Tronco", "ubicacion": "Desde la línea media dorsal hasta la espina de la escápula", "descripcion": "Músculo triangular y superficial", "inervacion": "Nervio accesorio", "funcion": "Eleva y abduce la escápula" },
    { "nombre": "Dorsal ancho", "region": "Tronco", "ubicacion": "Desde la fascia toracolumbar hasta el húmero", "descripcion": "Músculo ancho y plano, caudal a la escápula", "inervacion": "Nervio toracodorsal", "funcion": "Aductor y extensor del hombro" },
    { "nombre": "Serrato ventral", "region": "Tronco", "ubicacion": "Desde las costillas medias hasta la cara medial de la escápula", "descripcion": "Músculo en forma de sierra", "inervacion": "Nervio torácico largo", "funcion": "Fijador y suspensor del tronco entre las extremidades" },
    { "nombre": "Pectoral superficial", "region": "Tronco", "ubicacion": "Desde el esternón craneal hasta la cresta del húmero", "descripcion": "Músculo superficial, ancho", "inervacion": "Nervio pectoral craneal", "funcion": "Aductor del miembro torácico" },
    { "nombre": "Pectoral profundo", "region": "Tronco", "ubicacion": "Desde el esternón caudal hasta la cara medial del húmero", "descripcion": "Músculo potente, caudal al superficial", "inervacion": "Nervio pectoral caudal", "funcion": "Aductor y retractor del miembro torácico" },
    { "nombre": "Recto abdominal", "region": "Abdomen", "ubicacion": "Línea media ventral, desde el esternón hasta la pelvis", "descripcion": "Músculo largo, con intersecciones tendinosas", "inervacion": "Nervios espinales toracolumbares ventrales", "funcion": "Flexor del tronco y compresor abdominal" },
    { "nombre": "Oblicuo externo del abdomen", "region": "Abdomen", "ubicacion": "Cara lateral del abdomen, superficial", "descripcion": "Músculo ancho con fibras caudoventrales", "inervacion": "Nervios toracolumbares ventrales", "funcion": "Compresor abdominal y flexor del tronco" },
    { "nombre": "Oblicuo interno del abdomen", "region": "Abdomen", "ubicacion": "Capa media de la pared abdominal, profundo al oblicuo externo", "descripcion": "Fibras cranioventrales", "inervacion": "Nervios toracolumbares ventrales", "funcion": "Compresor abdominal y flexor del tronco" },
    { "nombre": "Transverso del abdomen", "region": "Abdomen", "ubicacion": "Capa más profunda de la pared abdominal", "descripcion": "Fibras transversales", "inervacion": "Nervios toracolumbares ventrales", "funcion": "Compresor abdominal" },
    { "nombre": "Diafragma", "region": "Tórax/Abdomen", "ubicacion": "Separa la cavidad torácica de la abdominal", "descripcion": "Músculo en forma de cúpula con sus porciones costal, esternal y lumbar", "inervacion": "Nervio frénico (C5-C7)", "funcion": "Principal músculo de la inspiración" },
    { "nombre": "Intercostales externos", "region": "Tórax", "ubicacion": "Entre las costillas, desde el tubérculo hasta la unión costocondral", "descripcion": "Fibras orientadas caudoventralmente", "inervacion": "Nervios intercostales", "funcion": "Elevan las costillas (inspiración)" },
    { "nombre": "Intercostales internos", "region": "Tórax", "ubicacion": "Profundos a los externos, entre las costillas", "descripcion": "Fibras orientadas craneoventralmente", "inervacion": "Nervios intercostales", "funcion": "Deprimen las costillas (espiración forzada)" },
    { "nombre": "Escaleno", "region": "Cuello/Tórax", "ubicacion": "Desde las vértebras cervicales hasta la primera costilla", "descripcion": "Músculo en forma de abanico", "inervacion": "Ramos ventrales cervicales", "funcion": "Inspirador accesorio y flexor lateral del cuello" },
    { "nombre": "Serrato dorsal craneal", "region": "Tórax", "ubicacion": "Desde la fascia toracolumbar hasta las costillas craneales", "descripcion": "Músculo delgado, superficial", "inervacion": "Nervios intercostales", "funcion": "Inspirador (eleva las costillas)" },
    { "nombre": "Serrato dorsal caudal", "region": "Abdomen", "ubicacion": "Desde la fascia toracolumbar hasta las costillas caudales", "descripcion": "Músculo delgado", "inervacion": "Nervios intercostales", "funcion": "Espirador (deprime las costillas)" },
    { "nombre": "Longísimo del dorso", "region": "Dorso", "ubicacion": "Desde el sacro hasta la cabeza, a lo largo de las vértebras", "descripcion": "Músculo epiaxial potente, dividido en varias porciones", "inervacion": "Ramos dorsales de los nervios espinales", "funcion": "Extensor y estabilizador de la columna" },
    { "nombre": "Iliocostal", "region": "Dorso", "ubicacion": "Lateral al longísimo, desde el ilion hasta las costillas", "descripcion": "Porción lateral del sistema epiaxial", "inervacion": "Ramos dorsales", "funcion": "Extensor de la columna y depresor de las costillas (espiración)" },
    { "nombre": "Semiespinoso de la cabeza", "region": "Dorso/Cabeza", "ubicacion": "Desde las vértebras torácicas hasta el hueso occipital", "descripcion": "Músculo profundo, parte del sistema transversoespinoso", "inervacion": "Ramos dorsales de los nervios cervicales", "funcion": "Extensor y rotador de la cabeza" },
    { "nombre": "Multífido", "region": "Dorso", "ubicacion": "Entre las apófisis transversas y espinosas de las vértebras", "descripcion": "Músculos cortos y profundos", "inervacion": "Ramos dorsales", "funcion": "Rotación y extensión segmentaria de la columna" },
    { "nombre": "Cuadrado lumbar", "region": "Abdomen", "ubicacion": "Ventral a las apófisis transversas de las vértebras lumbares", "descripcion": "Músculo grueso, desde el ilion hasta la última costilla", "inervacion": "Nervios lumbares ventrales", "funcion": "Flexor lateral del tronco y fijador de la columna" },
    { "nombre": "Psoas mayor", "region": "Abdomen", "ubicacion": "Desde las vértebras lumbares hasta el trocánter menor del fémur", "descripcion": "Músculo largo y fusiforme", "inervacion": "Nervios lumbares ventrales", "funcion": "Flexor de la cadera" },
    { "nombre": "Ilíaco", "region": "Abdomen", "ubicacion": "Desde el ilion hasta el fémur, junto al psoas", "descripcion": "Músculo triangular", "inervacion": "Nervio femoral", "funcion": "Flexor de la cadera" },
    { "nombre": "Cocígeo", "region": "Pelvis", "ubicacion": "Desde la espina ciática hasta las vértebras caudales", "descripcion": "Músculo pequeño, profundo", "inervacion": "Ramos ventrales sacrococcígeos", "funcion": "Elevador de la cola" },
    { "nombre": "Elevador de la cola", "region": "Pelvis", "ubicacion": "Desde el sacro hasta las vértebras caudales", "descripcion": "Músculo par, superficial en la base de la cola", "inervacion": "Nervios coccígeos", "funcion": "Eleva la cola" },
    { "nombre": "Depresor de la cola", "region": "Pelvis", "ubicacion": "Ventral al sacro y primeras caudales", "descripcion": "Músculo largo y delgado", "inervacion": "Nervios coccígeos", "funcion": "Deprime la cola" },
    { "nombre": "Orbicular de los párpados", "region": "Cabeza", "ubicacion": "Alrededor de la órbita, en los párpados", "descripcion": "Músculo esfinteriano delgado", "inervacion": "Nervio facial", "funcion": "Cierre de los párpados (parpadeo)" },
    { "nombre": "Orbicular de la boca", "region": "Cabeza", "ubicacion": "Alrededor de la comisura labial", "descripcion": "Músculo esfinteriano complejo", "inervacion": "Nervio facial", "funcion": "Cierre de la boca y protrusión de los labios" },
    { "nombre": "Cigomático", "region": "Cabeza", "ubicacion": "Desde el arco cigomático hasta la comisura labial", "descripcion": "Músculo delgado, superficial", "inervacion": "Nervio facial", "funcion": "Retrae la comisura labial (sonrisa)" },
    { "nombre": "Elevador del labio superior", "region": "Cabeza", "ubicacion": "Desde el hueso maxilar hasta el labio superior", "descripcion": "Músculo pequeño", "inervacion": "Nervio facial", "funcion": "Eleva el labio superior" },
    { "nombre": "Canino", "region": "Cabeza", "ubicacion": "Desde la fosa canina hasta la comisura labial", "descripcion": "Músculo profundo al cigomático", "inervacion": "Nervio facial", "funcion": "Eleva la comisura labial" },
    { "nombre": "Depresor del labio inferior", "region": "Cabeza", "ubicacion": "Desde la mandíbula hasta el labio inferior", "descripcion": "Músculo delgado", "inervacion": "Nervio facial", "funcion": "Deprime el labio inferior" },
    { "nombre": "Mentoniano", "region": "Cabeza", "ubicacion": "En la barba, desde la mandíbula hasta la piel del mentón", "descripcion": "Músculo pequeño", "inervacion": "Nervio facial", "funcion": "Eleva la piel del mentón" },
    { "nombre": "Cutáneo del tronco", "region": "Tronco", "ubicacion": "Capa subcutánea del dorso y flancos", "descripcion": "Músculo delgado y extenso", "inervacion": "Ramas cutáneas de nervios torácicos", "funcion": "Mover la piel (reflejo de contracción cutánea)" },
    { "nombre": "Cutáneo del hombro", "region": "Miembro torácico", "ubicacion": "Cubre la región del hombro, superficial", "descripcion": "Músculo delgado, continuo con el cutáneo del tronco", "inervacion": "Nervios cutáneos", "funcion": "Sacudir la piel del hombro" },
    { "nombre": "Cutáneo femoral", "region": "Miembro pélvico", "ubicacion": "Cara lateral del muslo, superficial", "descripcion": "Músculo aplanado", "inervacion": "Ramas del plexo lumbar", "funcion": "Mover la piel del muslo" },
    { "nombre": "Lumbricales (mano)", "region": "Miembro torácico", "ubicacion": "Palma de la mano, entre los tendones del flexor profundo", "descripcion": "Pequeños músculos intrínsecos", "inervacion": "Nervio mediano y cubital", "funcion": "Flexión metacarpofalángica y extensión interfalángica" },
    { "nombre": "Interóseos (mano)", "region": "Miembro torácico", "ubicacion": "Entre los metacarpianos", "descripcion": "Músculos pequeños (palmares y dorsales)", "inervacion": "Nervio cubital", "funcion": "Aducción y abducción de los dedos" }
];

// ============================================================
// ESTADO
// ============================================================
let sesion = [];
let indiceActual = 0;
let musculoActual = null;
let aciertos = 0;
let fallos = 0;
let nivelPistaActual = 1;
let modoRapidoActivo = false;
let intervaloReloj = null;
let tiempoInicio = null;

// ============================================================
// LOCALSTORAGE
// ============================================================
function cargarProgreso() {
  const data = localStorage.getItem("progreso_musculos_v2");
  return data ? JSON.parse(data) : {};
}

function guardarProgreso(progreso) {
  localStorage.setItem("progreso_musculos_v2", JSON.stringify(progreso));
}

function obtenerEstadoMusculo(nombre) {
  const progreso = cargarProgreso();
  return progreso[nombre] || { fallos: 0, aciertos: 0, proximaVez: 0, vecesEstudiado: 0 };
}

function actualizarEstadoMusculo(nombre, acerto) {
  const progreso = cargarProgreso();
  const estado = obtenerEstadoMusculo(nombre);
  if (acerto) {
    estado.aciertos += 1;
    estado.fallos = 0;
    const diasEspera = Math.min(estado.aciertos, 7);
    estado.proximaVez = Date.now() + diasEspera * 24 * 60 * 60 * 1000;
  } else {
    estado.fallos += 1;
    estado.aciertos = 0;
    estado.proximaVez = Date.now() + 1 * 24 * 60 * 60 * 1000;
  }
  estado.vecesEstudiado += 1;
  progreso[nombre] = estado;
  guardarProgreso(progreso);
}

function reiniciarProgreso() {
  if (confirm("¿Borrar todo el progreso? Perderás todos tus aciertos.")) {
    localStorage.removeItem("progreso_musculos_v2");
    cargarResumenInicio();
    mostrarPantalla("pantalla-inicio");
  }
}

// ============================================================
// TEMPORIZADOR
// ============================================================
function iniciarReloj() {
  detenerReloj();
  tiempoInicio = Date.now();
  actualizarDisplayReloj();
  intervaloReloj = setInterval(actualizarDisplayReloj, 1000);
}

function detenerReloj() {
  if (intervaloReloj) { clearInterval(intervaloReloj); intervaloReloj = null; }
}

function actualizarDisplayReloj() {
  if (!tiempoInicio) return;
  const seg = Math.floor((Date.now() - tiempoInicio) / 1000);
  const m = Math.floor(seg / 60).toString().padStart(2, "0");
  const s = (seg % 60).toString().padStart(2, "0");
  const elem = document.getElementById("temporizador");
  if (elem) elem.textContent = `⏱ ${m}:${s}`;
}

// ============================================================
// INICIAR SESIÓN
// ============================================================
function iniciarSesion() {
  detenerReloj();
  modoRapidoActivo = false;
  const ahora = Date.now();
  const progreso = cargarProgreso();

  sesion = musculos.filter(m => {
    const e = progreso[m.nombre];
    return !e || e.proximaVez <= ahora;
  }).sort(() => Math.random() - 0.5);

  if (sesion.length === 0) {
    alert("🎉 ¡No hay músculos pendientes por hoy! Vuelve mañana.");
    return;
  }

  indiceActual = 0; aciertos = 0; fallos = 0;
  iniciarReloj();
  mostrarPregunta();
}

function iniciarQuizAleatorio(cantidad = 5) {
  detenerReloj();
  modoRapidoActivo = true;
  sesion = [...musculos].sort(() => Math.random() - 0.5).slice(0, cantidad);
  indiceActual = 0; aciertos = 0; fallos = 0;
  iniciarReloj();
  mostrarPregunta();
}

function salirSesion() {
  if (confirm("¿Salir de la evaluación?")) {
    detenerReloj();
    sesion = []; indiceActual = 0; aciertos = 0; fallos = 0; modoRapidoActivo = false;
    mostrarPantalla("pantalla-inicio");
    cargarResumenInicio();
  }
}

// ============================================================
// MOSTRAR PREGUNTA
// ============================================================
function mostrarPregunta() {
  if (indiceActual >= sesion.length) { mostrarFinSesion(); return; }

  musculoActual = sesion[indiceActual];
  nivelPistaActual = 1;

  document.getElementById("numero-pregunta").textContent =
    "Pregunta " + (indiceActual + 1) + " de " + sesion.length;
  document.getElementById("progreso").textContent =
    "✅ " + aciertos + "  ❌ " + fallos;

  // Barra de progreso
  const pct = (indiceActual / sesion.length) * 100;
  const fill = document.getElementById("progress-fill");
  if (fill) fill.style.width = pct + "%";

  // Ayudas
  document.getElementById("region-ayuda").textContent = musculoActual.region;
  document.getElementById("ubicacion-ayuda").textContent = musculoActual.ubicacion;
  document.getElementById("descripcion-ayuda").textContent = musculoActual.descripcion;

  // Limpiar
  ["input-nombre", "input-inervacion", "input-funcion"].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("panel-pista").style.display = "none";

  mostrarPantalla("pantalla-pregunta");
  document.getElementById("input-nombre").focus();
}

// ============================================================
// PISTA PROGRESIVA
// ============================================================
function mostrarPista() {
  const nombre = musculoActual.nombre;
  const palabras = nombre.split(" ");
  const nivel = nivelPistaActual;
  let pista = "";

  if (nivel === 1) {
    pista = `📏 El nombre tiene ${nombre.length} caracteres.`;
  } else if (nivel === 2) {
    pista = `🔤 Primera letra: "${nombre.charAt(0).toUpperCase()}". ⚡ Función: ${musculoActual.funcion}.`;
  } else if (nivel === 3) {
    pista = palabras.length >= 2
      ? `📖 Primera palabra: "${palabras[0]}". 🪢 Inervación: ${musculoActual.inervacion}.`
      : `📖 Primeras letras: "${nombre.substring(0, Math.floor(nombre.length / 2))}..."`;
  } else {
    pista = `💡 El músculo es: <strong>${nombre}</strong>`;
  }

  document.getElementById("nivel-pista").textContent = nivel;
  document.getElementById("texto-pista").innerHTML = pista;
  document.getElementById("panel-pista").style.display = "block";
  nivelPistaActual++;
}

// ============================================================
// NORMALIZAR Y COMPARAR
// ============================================================
function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ").trim();
}

function similitud(respuesta, correcto) {
  if (!respuesta || respuesta.trim() === "") return "incorrecto";
  const r = normalizar(respuesta);
  const c = normalizar(correcto);
  if (r === c) return "correcto";
  const rSin = r.replace(/^nervio\s+/, "");
  const cSin = c.replace(/^nervio\s+/, "");
  if (rSin === cSin) return "correcto";
  if (c.includes(r) || r.includes(c)) return "casi";
  return "incorrecto";
}

// ============================================================
// VERIFICAR RESPUESTA
// ============================================================
function verificarRespuesta() {
  const respNombre     = document.getElementById("input-nombre").value.trim();
  const respInervacion = document.getElementById("input-inervacion").value.trim();
  const respFuncion    = document.getElementById("input-funcion").value.trim();

  // Validación: todos vacíos
  if (!respNombre && !respInervacion && !respFuncion) {
    if (confirm("No escribiste ninguna respuesta. ¿Volver al menú principal?")) {
      detenerReloj();
      mostrarPantalla("pantalla-inicio");
      cargarResumenInicio();
    }
    return;
  }

  // Validación: algunos vacíos
  if (!respNombre || !respInervacion || !respFuncion) {
    const vacios = [];
    if (!respNombre) vacios.push("Nombre");
    if (!respInervacion) vacios.push("Inervación");
    if (!respFuncion) vacios.push("Función");
    if (!confirm(`Faltan: ${vacios.join(", ")}. ¿Continuar de todas formas?`)) return;
  }

  const campos = [
    { etiqueta: "Nombre del músculo", respuesta: respNombre,     correcto: musculoActual.nombre },
    { etiqueta: "Inervación",         respuesta: respInervacion, correcto: musculoActual.inervacion },
    { etiqueta: "Función",            respuesta: respFuncion,    correcto: musculoActual.funcion }
  ];

  let todoCorrecto = true;
  let html = "";

  campos.forEach(campo => {
    const resultado = similitud(campo.respuesta, campo.correcto);

    if (!campo.respuesta) {
      todoCorrecto = false;
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}</strong></p>
          <p style="color:var(--text2);font-size:0.85rem;">Sin respuesta</p>
          <span class="tag tag-err">❌ No respondido</span>
          <p class="sugerencia">Correcto: <strong>${campo.correcto}</strong></p>
        </div>`;
    } else if (resultado === "correcto") {
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}:</strong> ${campo.respuesta}</p>
          <span class="tag tag-ok">✅ Correcto</span>
        </div>`;
    } else if (resultado === "casi") {
      todoCorrecto = false;
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}:</strong> ${campo.respuesta}</p>
          <span class="tag tag-warn">⚠ Casi correcto</span>
          <p class="sugerencia">Forma exacta: <strong>${campo.correcto}</strong></p>
        </div>`;
    } else {
      todoCorrecto = false;
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}:</strong> ${campo.respuesta}</p>
          <span class="tag tag-err">❌ Incorrecto</span>
          <p class="sugerencia">Correcto: <strong>${campo.correcto}</strong></p>
        </div>`;
    }
  });

  if (todoCorrecto) {
    aciertos++;
    if (!modoRapidoActivo) actualizarEstadoMusculo(musculoActual.nombre, true);
    html += `<div style="margin-top:1rem;padding:0.8rem;background:var(--success-light);border-radius:var(--radius-sm);color:#065f46;font-weight:600;">🎉 ¡Perfecto! +1 punto</div>`;
  } else {
    fallos++;
    if (!modoRapidoActivo) actualizarEstadoMusculo(musculoActual.nombre, false);
    html += `<div style="margin-top:1rem;padding:0.8rem;background:var(--error-light);border-radius:var(--radius-sm);color:#991b1b;font-weight:500;">📌 Esta pregunta volverá pronto para repaso.</div>`;
  }

  document.getElementById("detalle-resultado").innerHTML = html;
  mostrarPantalla("pantalla-resultado");
}

// ============================================================
// NAVEGACIÓN
// ============================================================
function siguientePregunta() { indiceActual++; mostrarPregunta(); }
function repetirPregunta()   { mostrarPregunta(); }

function mostrarPantalla(id) {
  document.querySelectorAll(".pantalla").forEach(p => p.classList.remove("activa"));
  const pantalla = document.getElementById(id);
  if (pantalla) pantalla.classList.add("activa");
  if (id === "pantalla-pendientes") cargarListaPendientes();
  if (id === "pantalla-inicio")     cargarResumenInicio();
}

// ============================================================
// FIN DE SESIÓN
// ============================================================
function mostrarFinSesion() {
  detenerReloj();

  if (modoRapidoActivo) {
    document.getElementById("resumen-fin").innerHTML = `
      <p style="font-size:1.1rem;font-weight:700;margin-bottom:0.8rem;">Modo rápido · ${sesion.length} preguntas</p>
      <p>✅ Correctas: <strong>${aciertos}</strong></p>
      <p>❌ Falladas: <strong>${fallos}</strong></p>
      <p style="margin-top:0.8rem;color:var(--text2);font-size:0.9rem;">El progreso no se guarda en modo rápido.</p>
    `;
    mostrarPantalla("pantalla-fin");
    return;
  }

  const progreso = cargarProgreso();
  const ahora = Date.now();

  const pendientes = musculos.filter(m => {
    const e = progreso[m.nombre];
    return e && e.proximaVez > ahora && e.fallos > 0;
  });

  const dominados = musculos.filter(m => {
    const e = progreso[m.nombre];
    return e && e.aciertos >= 3;
  });

  let html = `
    <p style="font-size:1.1rem;font-weight:700;margin-bottom:0.8rem;">Resumen de sesión</p>
    <p>📋 Respondidas: <strong>${sesion.length}</strong></p>
    <p>✅ Correctas: <strong>${aciertos}</strong></p>
    <p>❌ Falladas: <strong>${fallos}</strong></p>
  `;

  if (pendientes.length > 0) {
    html += `<p style="margin-top:1rem;font-weight:600;">🔁 Vuelven mañana:</p>`;
    pendientes.forEach(m => {
      html += `<p style="color:var(--error);font-size:0.9rem;margin-top:0.2rem;">• ${m.nombre}</p>`;
    });
  }

  if (dominados.length > 0) {
    html += `<p style="margin-top:1rem;font-weight:600;">🏆 Dominados:</p>`;
    dominados.forEach(m => {
      html += `<p style="color:var(--success);font-size:0.9rem;margin-top:0.2rem;">• ${m.nombre}</p>`;
    });
  }

  document.getElementById("resumen-fin").innerHTML = html;
  mostrarPantalla("pantalla-fin");
}

// ============================================================
// LISTA DE PENDIENTES
// ============================================================
function cargarListaPendientes() {
  const progreso = cargarProgreso();
  const ahora = Date.now();
  let html = "";

  musculos.forEach(m => {
    const e = progreso[m.nombre];
    let badge = "";
    if (!e) {
      badge = `<span class="badge-estado badge-nuevo">Nuevo</span>`;
    } else if (e.proximaVez <= ahora) {
      badge = `<span class="badge-estado badge-pendiente">Hoy</span>`;
    } else if (e.aciertos >= 3) {
      badge = `<span class="badge-estado badge-dominado">Dominado ✓</span>`;
    } else {
      const dias = Math.ceil((e.proximaVez - ahora) / (1000 * 60 * 60 * 24));
      badge = `<span class="badge-estado badge-pronto">En ${dias}d</span>`;
    }
    html += `
      <div class="musculo-item">
        <span>${m.nombre}</span>
        ${badge}
      </div>`;
  });

  document.getElementById("lista-pendientes").innerHTML = html;
}

// ============================================================
// RESUMEN INICIO
// ============================================================
function cargarResumenInicio() {
  const progreso = cargarProgreso();
  const ahora = Date.now();
  const total = musculos.length;

  const pendientesHoy = musculos.filter(m => {
    const e = progreso[m.nombre];
    return !e || e.proximaVez <= ahora;
  }).length;

  const dominados = musculos.filter(m => {
    const e = progreso[m.nombre];
    return e && e.aciertos >= 3;
  }).length;

  const pct = Math.round((dominados / total) * 100);

  document.getElementById("resumen-inicio").innerHTML = `
    <div class="stat-row">
      <div class="stat">
        <span class="stat-num">${pendientesHoy}</span>
        <span class="stat-label">Pendientes hoy</span>
      </div>
      <div class="stat">
        <span class="stat-num">${dominados}</span>
        <span class="stat-label">Dominados</span>
      </div>
      <div class="stat">
        <span class="stat-num">${total}</span>
        <span class="stat-label">Total</span>
      </div>
    </div>
    <div class="progress-bar" style="margin-top:0.5rem;">
      <div class="progress-fill" style="width:${pct}%"></div>
    </div>
    <p style="font-size:0.78rem;color:var(--text2);margin-top:0.4rem;">${pct}% completado</p>
  `;
}

// Inicializar
cargarResumenInicio();