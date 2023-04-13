--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: car; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.car (
    id integer NOT NULL,
    name character varying NOT NULL,
    "manufacturerId" integer NOT NULL
);


ALTER TABLE public.car OWNER TO postgres;

--
-- Name: car_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.car_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.car_id_seq OWNER TO postgres;

--
-- Name: car_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.car_id_seq OWNED BY public.car.id;


--
-- Name: carport; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carport (
    id integer NOT NULL,
    "serialNumber" character varying NOT NULL,
    "manufacturerId" integer NOT NULL,
    "carId" integer NOT NULL
);


ALTER TABLE public.carport OWNER TO postgres;

--
-- Name: carport_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carport_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carport_id_seq OWNER TO postgres;

--
-- Name: carport_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carport_id_seq OWNED BY public.carport.id;


--
-- Name: cars_drivers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cars_drivers (
    car_id integer NOT NULL,
    driver_id integer NOT NULL
);


ALTER TABLE public.cars_drivers OWNER TO postgres;

--
-- Name: driver; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.driver (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.driver OWNER TO postgres;

--
-- Name: driver_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.driver_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.driver_id_seq OWNER TO postgres;

--
-- Name: driver_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.driver_id_seq OWNED BY public.driver.id;


--
-- Name: manufacturer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manufacturer (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.manufacturer OWNER TO postgres;

--
-- Name: manufacturer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.manufacturer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.manufacturer_id_seq OWNER TO postgres;

--
-- Name: manufacturer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.manufacturer_id_seq OWNED BY public.manufacturer.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: seat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seat (
    id integer NOT NULL,
    color character varying NOT NULL,
    "carId" integer
);


ALTER TABLE public.seat OWNER TO postgres;

--
-- Name: seat_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seat_id_seq OWNER TO postgres;

--
-- Name: seat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seat_id_seq OWNED BY public.seat.id;


--
-- Name: wheel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wheel (
    id integer NOT NULL,
    size integer NOT NULL,
    "carId" integer NOT NULL
);


ALTER TABLE public.wheel OWNER TO postgres;

--
-- Name: wheel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wheel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wheel_id_seq OWNER TO postgres;

--
-- Name: wheel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wheel_id_seq OWNED BY public.wheel.id;


--
-- Name: car id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car ALTER COLUMN id SET DEFAULT nextval('public.car_id_seq'::regclass);


--
-- Name: carport id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carport ALTER COLUMN id SET DEFAULT nextval('public.carport_id_seq'::regclass);


--
-- Name: driver id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.driver ALTER COLUMN id SET DEFAULT nextval('public.driver_id_seq'::regclass);


--
-- Name: manufacturer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manufacturer ALTER COLUMN id SET DEFAULT nextval('public.manufacturer_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: seat id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seat ALTER COLUMN id SET DEFAULT nextval('public.seat_id_seq'::regclass);


--
-- Name: wheel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wheel ALTER COLUMN id SET DEFAULT nextval('public.wheel_id_seq'::regclass);


--
-- Data for Name: car; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.car (id, name, "manufacturerId") FROM stdin;
1	Handcrafted Fresh Mouse	95
2	Intelligent Concrete Bike	37
3	Intelligent Plastic Bike	37
4	Handcrafted Fresh Tuna	63
5	Licensed Metal Hat	79
6	Tasty Plastic Chips	88
7	Tasty Granite Hat	7
8	Incredible Steel Ball	74
9	Refined Metal Fish	7
10	Fantastic Wooden Computer	23
11	Generic Wooden Soap	59
12	Generic Steel Table	24
13	Handmade Rubber Fish	19
14	Awesome Rubber Keyboard	82
15	Gorgeous Fresh Computer	69
16	Unbranded Cotton Bacon	69
17	Gorgeous Plastic Shoes	32
18	Refined Wooden Hat	88
19	Refined Fresh Table	54
20	Incredible Fresh Computer	55
21	Handmade Soft Soap	96
22	Handcrafted Frozen Towels	29
23	Incredible Wooden Pants	2
24	Intelligent Granite Computer	64
25	Gorgeous Granite Soap	78
26	Generic Plastic Chair	56
27	Incredible Granite Table	61
28	Small Steel Ball	96
29	Small Metal Pizza	31
30	Fantastic Frozen Car	87
31	Small Plastic Computer	97
32	Small Plastic Bacon	16
33	Rustic Granite Hat	54
34	Handmade Metal Shirt	46
35	Rustic Wooden Gloves	88
36	Incredible Soft Pants	73
37	Gorgeous Cotton Car	9
38	Fantastic Cotton Cheese	10
39	Awesome Fresh Car	18
40	Incredible Frozen Computer	72
41	Tasty Soft Ball	39
42	Generic Cotton Car	37
43	Practical Plastic Table	44
44	Refined Soft Tuna	59
45	Rustic Frozen Pants	54
46	Intelligent Plastic Towels	48
47	Tasty Cotton Sausages	51
48	Awesome Plastic Chips	62
49	Generic Wooden Chicken	49
50	Fantastic Fresh Pants	57
51	Ergonomic Concrete Gloves	61
52	Tasty Fresh Shirt	61
53	Intelligent Rubber Chips	15
54	Unbranded Fresh Car	33
55	Tasty Granite Pizza	34
56	Awesome Cotton Shoes	99
57	Refined Plastic Towels	33
58	Licensed Cotton Chicken	10
59	Sleek Cotton Tuna	87
60	Incredible Cotton Mouse	7
61	Awesome Metal Salad	48
62	Sleek Fresh Bike	97
63	Unbranded Steel Ball	46
64	Sleek Metal Sausages	52
65	Intelligent Fresh Salad	15
66	Handmade Wooden Computer	10
67	Intelligent Concrete Car	89
68	Handcrafted Steel Car	84
69	Practical Plastic Table	5
70	Fantastic Rubber Cheese	81
71	Sleek Plastic Keyboard	34
72	Sleek Plastic Mouse	78
73	Rustic Rubber Bike	8
74	Awesome Metal Shirt	46
75	Incredible Wooden Pizza	86
76	Awesome Cotton Pants	24
77	Licensed Rubber Chips	7
78	Generic Steel Hat	40
79	Licensed Cotton Computer	50
80	Unbranded Frozen Fish	12
81	Fantastic Steel Chicken	37
82	Fantastic Soft Hat	69
83	Handcrafted Concrete Towels	75
84	Licensed Fresh Chair	91
85	Rustic Cotton Chips	1
86	Practical Wooden Bacon	54
87	Handmade Metal Gloves	52
88	Handcrafted Frozen Car	94
89	Practical Rubber Pizza	21
90	Rustic Steel Shoes	89
91	Sleek Frozen Towels	3
92	Tasty Wooden Fish	78
93	Unbranded Soft Shoes	52
94	Awesome Metal Gloves	26
95	Fantastic Plastic Table	76
96	Gorgeous Concrete Gloves	70
97	Rustic Steel Chips	44
98	Sleek Concrete Pants	76
99	Sleek Rubber Cheese	91
100	Tasty Rubber Ball	21
\.


--
-- Data for Name: carport; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carport (id, "serialNumber", "manufacturerId", "carId") FROM stdin;
1	#25046b	74	14
2	#43710b	70	31
3	#270721	64	81
4	#5b126d	31	47
5	#4b547c	86	74
6	#7b4871	31	12
7	#1e0e4d	73	68
8	#1c054b	52	20
9	#3f0a61	35	58
10	#51404d	81	15
11	#5d041c	46	58
12	#33795b	96	84
13	#417626	27	3
14	#555526	54	13
15	#717a1c	37	8
16	#63514e	76	55
17	#712800	75	3
18	#2c3f30	85	6
19	#04573f	16	17
20	#411629	23	42
21	#705c1b	56	96
22	#2d467e	98	13
23	#0c232d	72	70
24	#2e6602	92	55
25	#14312b	95	23
26	#38482e	29	14
27	#1c226a	93	51
28	#41054d	53	16
29	#7f4106	68	64
30	#632525	58	79
31	#321d12	4	12
32	#087a45	51	77
33	#185735	83	81
34	#20741e	33	59
35	#5a722c	74	48
36	#7f4c80	1	36
37	#7b7c05	61	57
38	#2a3351	15	48
39	#715410	44	62
40	#581b1a	10	82
41	#80120d	35	86
42	#39714d	80	34
43	#614753	93	91
44	#6e5e21	34	16
45	#057a40	69	100
46	#08234e	85	82
47	#1e3109	37	15
48	#12357b	49	7
49	#1c202d	40	47
50	#5f7643	13	99
51	#4c2e77	64	54
52	#50463e	94	20
53	#766c31	32	43
54	#4c2130	40	58
55	#59034b	50	45
56	#5b5b39	85	4
57	#132c79	32	11
58	#535808	87	71
59	#16026e	33	18
60	#027851	16	94
61	#361b45	72	3
62	#2d7612	36	84
63	#674336	21	71
64	#0b210e	92	80
65	#753778	29	14
66	#187725	5	69
67	#7f232d	25	80
68	#493b1d	26	11
69	#4d7135	9	25
70	#433f6e	39	54
71	#6e0272	21	1
72	#663140	90	73
73	#334516	81	85
74	#582704	78	4
75	#755e6a	64	11
76	#707e07	78	40
77	#196623	93	38
78	#19130f	34	59
79	#4a226c	45	23
80	#6c4610	53	19
81	#0b3926	27	20
82	#063134	68	2
83	#302344	78	24
84	#2c5705	61	18
85	#451133	74	66
86	#2b2f3b	5	61
87	#25701d	45	58
88	#5f622a	50	1
89	#591812	93	10
90	#53546e	38	13
91	#116a20	9	1
92	#28276e	41	76
93	#7b7d23	15	100
94	#0b6467	80	85
95	#405e73	38	37
96	#384025	16	2
97	#5d376a	62	61
98	#305b3b	43	21
99	#144c09	16	68
100	#120b0d	49	33
\.


--
-- Data for Name: cars_drivers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cars_drivers (car_id, driver_id) FROM stdin;
1	10
1	30
2	10
2	30
3	10
3	30
4	10
4	30
5	10
5	30
6	10
6	30
7	10
7	30
8	10
8	30
9	10
9	30
10	10
10	30
11	10
11	30
12	10
12	30
13	10
13	30
14	10
14	30
15	10
15	30
16	10
16	30
17	10
17	30
18	10
18	30
19	10
19	30
20	10
20	30
21	10
21	30
22	10
22	30
23	10
23	30
24	10
24	30
25	10
25	30
26	10
26	30
27	10
27	30
28	10
28	30
29	10
29	30
30	10
30	30
31	10
31	30
32	10
32	30
33	10
33	30
34	10
34	30
35	10
35	30
36	10
36	30
37	10
37	30
38	10
38	30
39	10
39	30
40	10
40	30
41	10
41	30
42	10
42	30
43	10
43	30
44	10
44	30
45	10
45	30
46	10
46	30
47	10
47	30
48	10
48	30
49	10
49	30
50	10
50	30
51	10
51	30
52	10
52	30
53	10
53	30
54	10
54	30
55	10
55	30
56	10
56	30
57	10
57	30
58	10
58	30
59	10
59	30
60	10
60	30
61	10
61	30
62	10
62	30
63	10
63	30
64	10
64	30
65	10
65	30
66	10
66	30
67	10
67	30
68	10
68	30
69	10
69	30
70	10
70	30
71	10
71	30
72	10
72	30
73	10
73	30
74	10
74	30
75	10
75	30
76	10
76	30
77	10
77	30
78	10
78	30
79	10
79	30
80	10
80	30
81	10
81	30
82	10
82	30
83	10
83	30
84	10
84	30
85	10
85	30
86	10
86	30
87	10
87	30
88	10
88	30
89	10
89	30
90	10
90	30
91	10
91	30
92	10
92	30
93	10
93	30
94	10
94	30
95	10
95	30
96	10
96	30
97	10
97	30
98	10
98	30
99	10
99	30
100	10
100	30
\.


--
-- Data for Name: driver; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.driver (id, name) FROM stdin;
1	Flora McGlynn
2	Hilda Wyman
3	Martha Anderson
4	Connie Heidenreich
5	Hope Moen
6	Sadie Kuvalis
7	Miss Anne Pfeffer
8	Archie Wuckert
9	Grace Erdman
10	Lisa Will
11	Evelyn Boyer
12	Norma Ruecker
13	Kari Heathcote
14	Miss Tara Huels
15	Kellie Cormier II
16	Cecilia Hyatt
17	Ruben Conroy
18	Dianne Bartell DVM
19	Jeanne Dickens
20	Ms. Pat Price
21	Alexandra Gerhold
22	Morris Rau
23	Clyde Ziemann
24	Otis Ankunding
25	Eva Botsford
26	Allison Wolf PhD
27	Salvatore Sipes
28	Raymond Kris
29	Jenny Bruen
30	Erick Kohler
31	Terrence Howell
32	Tamara Wisozk
33	Dr. Mike Emmerich
34	Jody Jast
35	Ms. Beverly Cremin
36	Angel Langosh
37	Brett West
38	Austin West
39	Henrietta Kuhlman
40	Clinton Bogisich PhD
41	Frank Doyle
42	Whitney Schumm
43	Gail Weber
44	Felix Mosciski MD
45	Terrell Kertzmann
46	Lee Halvorson
47	Irvin Brakus
48	Sheldon Graham
49	Kurt Heathcote
50	Trevor Glover
51	Bryan White
52	Beatrice Bergstrom DVM
53	Karla Lemke
54	Travis Marvin
55	Olga Farrell
56	Darlene Gerlach
57	Janice O'Kon
58	Ryan Hoeger
59	Terri Dooley
60	John Nicolas
61	Norma Gerlach
62	Sally Jones
63	Ernesto Heaney
64	Dr. Zachary Tillman
65	Jonathon Wyman
66	Mark Marquardt
67	Mrs. Todd Kassulke
68	Loretta Pfeffer IV
69	Dr. Susan Wolff
70	Susie Stanton
71	Mona Lueilwitz
72	Ismael Sporer
73	Meghan Davis III
74	Glen Kutch
75	Lynn Crona
76	Garrett Kris
77	Miss Brian Effertz
78	Gloria Rogahn
79	Vivian Reichel
80	Hannah Schumm
81	Amber Harris
82	Joann Vandervort
83	Clinton Kirlin V
84	Andres Morar
85	Leticia Fadel
86	Mark Daugherty
87	Ms. Georgia Friesen
88	Megan Schmitt
89	Anna Jacobs
90	Lois Murazik
91	Jimmy Kilback
92	Javier Hudson DDS
93	Ray Hegmann
94	Charles Waters
95	Johnnie Paucek
96	Trevor Gaylord
97	Patti Schneider
98	Loren Lemke
99	Hope Jaskolski
100	Phillip Ondricka MD
101	Charles Satterfield
102	Marilyn Cole
103	Dr. Christie Kunde
104	Chelsea Beatty
105	Miss Violet Morissette
106	Earl Konopelski PhD
107	Jessica Hermiston
108	Ismael Rodriguez III
109	Deanna West
110	Jared Sporer
111	Duane Raynor
112	Jeremiah Nicolas
113	Greg Roob
114	Ms. Woodrow Stiedemann
115	Derek Fritsch
116	Karen Nienow
117	Dianne Treutel
118	Ms. Olga Labadie
119	Jo Auer
120	Amos Rippin
\.


--
-- Data for Name: manufacturer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.manufacturer (id, name) FROM stdin;
1	Marcus Will V
2	Manuel Jacobson
3	Miss Tami Hoppe
4	Tami Conroy
5	Kim Flatley DVM
6	Janie McDermott
7	Rosalie Bogan
8	Andrew Stokes
9	Marc Koss
10	Hector Swift
11	Charles Hamill PhD
12	Marty Hodkiewicz
13	Marty Luettgen
14	Mr. Leona Dietrich
15	Dave Hagenes
16	Paul Satterfield
17	Emmett Roob
18	Tommy Hauck
19	Walter Satterfield
20	Miss Troy Pouros
21	Candace Rogahn
22	Courtney Schoen
23	Jessie Ferry
24	Larry Wiegand
25	Rudolph Corkery
26	Ida Crist Jr.
27	Ms. Russell Lesch
28	Rosalie Cremin
29	Ruby Hermiston DVM
30	Homer Gutmann
31	Dixie Prohaska
32	Simon Heathcote Sr.
33	Juan Hudson
34	Mrs. Doreen Windler
35	Lee Ratke
36	Leslie Grimes
37	Ms. Kenneth Schroeder
38	Lora Luettgen
39	Phyllis Veum Jr.
40	Crystal Welch
41	Howard Jacobs
42	Glenda Jacobson MD
43	Becky Kris
44	Adam Nitzsche MD
45	Blanche Wunsch
46	Greg Schimmel
47	Sylvester Lind MD
48	Chelsea Kub
49	Janet Johnson
50	Eva Bins
51	Naomi Bernier
52	Jennie Armstrong
53	Shawna Gerhold
54	Francisco Mayert
55	Raquel Sporer
56	Misty Douglas
57	Yolanda Swift
58	Janice Ankunding
59	Ignacio Ryan
60	Don Wintheiser
61	Josefina Green I
62	Alfonso Borer
63	Sherman Dooley
64	Ebony Volkman
65	Elmer Pacocha
66	Jaime Lueilwitz I
67	Joe Gulgowski
68	Lucille Beier
69	Morris Lowe
70	Julia Schaden
71	Tara Huel
72	Lucy Cole PhD
73	Jerome Kshlerin
74	Kenneth Mayer DDS
75	Mr. Irving Marquardt
76	Ramon Bednar
77	Peggy Waelchi V
78	Laverne Murphy
79	Ruby Reinger
80	Sonja Medhurst
81	Danny Stokes
82	Marilyn Effertz
83	Charlotte Dickens
84	Ruben Weimann
85	Blanca Yost I
86	Lillian Nienow
87	Miss Miguel Schaden
88	Delores West DVM
89	Cathy Jaskolski
90	Leona Upton
91	Ronnie Ernser DDS
92	Mrs. Marion Abshire
93	Allan Miller
94	Mindy Johnson
95	Troy Dooley
96	Lindsey O'Conner
97	Marlene Cronin DVM
98	Clara Kemmer
99	Ashley Mosciski
100	Josh Gaylord
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
\.


--
-- Data for Name: seat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seat (id, color, "carId") FROM stdin;
1	#410a22	35
2	#164651	71
3	#53794a	74
4	#7a4d3a	62
5	#662e80	48
6	#704c58	86
7	#0c4d07	23
8	#6b305d	17
9	#605643	45
10	#006853	8
11	#211142	25
12	#417f6c	89
13	#6b171d	20
14	#1b5620	16
15	#6d7143	19
16	#472810	46
17	#5e3022	73
18	#36516f	74
19	#3e6767	63
20	#16734d	83
21	#0e807d	12
22	#613241	33
23	#04780d	12
24	#363278	89
25	#1b3303	20
26	#597e2e	94
27	#77807e	39
28	#0f2348	16
29	#7b1026	74
30	#467e13	33
31	#297768	91
32	#60603a	78
33	#6d1667	79
34	#36651a	69
35	#710254	28
36	#187419	39
37	#560a7c	51
38	#7a6859	68
39	#252601	50
40	#5b4602	42
41	#7c776e	2
42	#3b1a01	87
43	#2d4c31	74
44	#2d7915	62
45	#1e6028	60
46	#702778	11
47	#70607e	39
48	#733708	50
49	#5b3c31	5
50	#612972	55
51	#485953	67
52	#035806	91
53	#49124a	11
54	#4c7521	89
55	#3e1259	57
56	#652517	56
57	#135747	23
58	#592861	98
59	#777c19	72
60	#444d1c	59
61	#316344	49
62	#79440e	82
63	#173545	34
64	#3c0e51	62
65	#0a3976	96
66	#6b3e1a	34
67	#3b097b	94
68	#440717	27
69	#464e75	39
70	#755f22	1
71	#23346f	92
72	#214a57	47
73	#067c7a	12
74	#28592a	84
75	#184a38	53
76	#267157	89
77	#7b5e12	17
78	#7c7732	59
79	#3e374e	58
80	#0f1c65	44
81	#2e6e39	28
82	#313a7e	95
83	#701377	73
84	#0d4c6e	33
85	#6f557b	41
86	#7e246b	38
87	#427913	71
88	#7c1113	9
89	#6c4508	54
90	#02351b	43
91	#560451	44
92	#691d6c	44
93	#700b28	57
94	#24525a	63
95	#2a087d	67
96	#421243	53
97	#035233	30
98	#5e4943	84
99	#752500	94
100	#5e6869	61
\.


--
-- Data for Name: wheel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wheel (id, size, "carId") FROM stdin;
1	65	66
2	65	80
3	65	56
4	65	74
5	65	72
6	65	12
7	65	35
8	65	46
9	65	14
10	65	40
11	65	23
12	65	29
13	65	11
14	65	34
15	65	77
16	65	44
17	65	98
18	65	25
19	65	55
20	65	47
21	65	24
22	65	27
23	65	94
24	65	92
25	65	13
26	65	23
27	65	91
28	65	16
29	65	84
30	65	70
31	65	78
32	65	99
33	65	35
34	65	49
35	65	41
36	65	33
37	65	88
38	65	30
39	65	24
40	65	26
41	65	37
42	65	42
43	65	39
44	65	19
45	65	30
46	65	100
47	65	82
48	65	17
49	65	4
50	65	100
51	65	50
52	65	52
53	65	98
54	65	57
55	65	24
56	65	63
57	65	72
58	65	43
59	65	17
60	65	74
61	65	9
62	65	26
63	65	46
64	65	30
65	65	48
66	65	93
67	65	42
68	65	15
69	65	45
70	65	5
71	65	99
72	65	94
73	65	83
74	65	54
75	65	58
76	65	5
77	65	100
78	65	16
79	65	27
80	65	28
81	65	96
82	65	81
83	65	87
84	65	85
85	65	7
86	65	77
87	65	94
88	65	93
89	65	92
90	65	96
91	65	80
92	65	7
93	65	53
94	65	74
95	65	4
96	65	19
97	65	90
98	65	16
99	65	14
100	65	83
\.


--
-- Name: car_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.car_id_seq', 100, true);


--
-- Name: carport_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carport_id_seq', 100, true);


--
-- Name: driver_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.driver_id_seq', 120, true);


--
-- Name: manufacturer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.manufacturer_id_seq', 100, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, false);


--
-- Name: seat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seat_id_seq', 100, true);


--
-- Name: wheel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wheel_id_seq', 100, true);


--
-- Name: seat PK_4e72ae40c3fbd7711ccb380ac17; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seat
    ADD CONSTRAINT "PK_4e72ae40c3fbd7711ccb380ac17" PRIMARY KEY (id);


--
-- Name: car PK_55bbdeb14e0b1d7ab417d11ee6d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car
    ADD CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY (id);


--
-- Name: driver PK_61de71a8d217d585ecd5ee3d065; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.driver
    ADD CONSTRAINT "PK_61de71a8d217d585ecd5ee3d065" PRIMARY KEY (id);


--
-- Name: manufacturer PK_81fc5abca8ed2f6edc79b375eeb; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT "PK_81fc5abca8ed2f6edc79b375eeb" PRIMARY KEY (id);


--
-- Name: wheel PK_87bf9475f18a2419cf0a424120d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wheel
    ADD CONSTRAINT "PK_87bf9475f18a2419cf0a424120d" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: cars_drivers PK_b514670642c166517cd75a9a193; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars_drivers
    ADD CONSTRAINT "PK_b514670642c166517cd75a9a193" PRIMARY KEY (car_id, driver_id);


--
-- Name: carport PK_b887ba20ebb8b3dac8d8279e217; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carport
    ADD CONSTRAINT "PK_b887ba20ebb8b3dac8d8279e217" PRIMARY KEY (id);


--
-- Name: IDX_3c70f0ddf7162c8b82fb5891f0; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_3c70f0ddf7162c8b82fb5891f0" ON public.cars_drivers USING btree (car_id);


--
-- Name: IDX_8859084f75288918aa1c5a25d5; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_8859084f75288918aa1c5a25d5" ON public.cars_drivers USING btree (driver_id);


--
-- Name: car FK_219df163feb468a934c3a7b24ca; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.car
    ADD CONSTRAINT "FK_219df163feb468a934c3a7b24ca" FOREIGN KEY ("manufacturerId") REFERENCES public.manufacturer(id);


--
-- Name: carport FK_361a04353119c38910004f1c0d9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carport
    ADD CONSTRAINT "FK_361a04353119c38910004f1c0d9" FOREIGN KEY ("manufacturerId") REFERENCES public.manufacturer(id);


--
-- Name: cars_drivers FK_3c70f0ddf7162c8b82fb5891f0a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars_drivers
    ADD CONSTRAINT "FK_3c70f0ddf7162c8b82fb5891f0a" FOREIGN KEY (car_id) REFERENCES public.car(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: seat FK_4061d4333f442bf1a69b2cdc85d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seat
    ADD CONSTRAINT "FK_4061d4333f442bf1a69b2cdc85d" FOREIGN KEY ("carId") REFERENCES public.car(id);


--
-- Name: cars_drivers FK_8859084f75288918aa1c5a25d58; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars_drivers
    ADD CONSTRAINT "FK_8859084f75288918aa1c5a25d58" FOREIGN KEY (driver_id) REFERENCES public.driver(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: wheel FK_b66911c758a1212c2574530711f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wheel
    ADD CONSTRAINT "FK_b66911c758a1212c2574530711f" FOREIGN KEY ("carId") REFERENCES public.car(id);


--
-- Name: carport FK_db6fab551759c84cf14648d9315; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carport
    ADD CONSTRAINT "FK_db6fab551759c84cf14648d9315" FOREIGN KEY ("carId") REFERENCES public.car(id);


--
-- PostgreSQL database dump complete
--

