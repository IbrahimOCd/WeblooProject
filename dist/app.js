/* Webloo: languages (EN / FR / AR) and theme (light / dark).
   The page is written in English. Each English string maps to [French, Arabic].
   Static text is swapped in place; scripts call WebI18n.t('English') for text they create.
   Edit translations in tools/translations_v2.py (meaning first, names kept as they are), then run it. */
(() => {
  const D = {
    "Work": ["Réalisations", "أعمالنا"],
    "Ecosystem": ["Écosystème", "منظومتنا"],
    "About": ["À propos", "من نحن"],
    "Insights": ["Perspectives", "آراء وتحليلات"],
    "Start a project": ["Lancer un projet", "ابدأ مشروعك"],
    "250+ people · Newport Beach · Miami · Rabat · Skopje": ["250+ experts · Newport Beach · Miami · Rabat · Skopje", "أكثر من 250 خبيرًا · Newport Beach · Miami · الرباط · Skopje"],
    "No hand‑offs.": ["Un seul fil.", "بلا وسطاء."],
    "Webloo is a growth ecosystem, not an agency.": ["Webloo n’est pas une agence. C’est un écosystème de croissance.", "Webloo ليست وكالة، بل منظومة متكاملة للنمو."],
    "Brand, platform, store, media and stadium, run by four business units on one thread, so your project never changes hands.": ["Marque, plateforme, boutique, médias, stade : quatre pôles tiennent le même fil, et votre projet reste entre les mêmes mains du début à la fin.", "الهوية والمنصّة والمتجر والإعلام والملعب، تتولّاها أربع وحدات تعمل فريقًا واحدًا، فيبقى مشروعك بين يدين أمينتين من البداية إلى النهاية."],
    "01 Brand": ["01 Marque", "01 الهوية"],
    "Wydad AC · identity": ["Wydad AC · identité", "الوداد · الهوية البصرية"],
    "02 Platform": ["02 Plateforme", "02 المنصّة"],
    "FRMF · fan platform": ["FRMF · plateforme supporters", "FRMF · منصّة الجماهير"],
    "03 Store": ["03 Boutique", "03 المتجر"],
    "FRMF · official store": ["FRMF · boutique officielle", "FRMF · المتجر الرسمي"],
    "04 Media": ["04 Médias", "04 الإعلام"],
    "Rabat Live Arena · campaign": ["Rabat Live Arena · campagne", "Rabat Live Arena · الحملة"],
    "05 Stadium": ["05 Stade", "05 الملعب"],
    "Moulay Abdellah · match day": ["Moulay Abdellah · jour de match", "ملعب مولاي عبد الله · يوم المباراة"],
    "(01) The hand-off game": ["(01) Le jeu des relais", "(01) لعبة الوسطاء"],
    "Every hand-off": ["À chaque relais,", "مع كل وسيط"],
    "rewrites your brief.": ["votre brief se perd un peu.", "يضيع جزء من طلبك."],
    "Most clients pass one brief through five partners. Watch what arrives at the end. Then run it again, the Webloo way.": ["La plupart des clients confient le même brief à cinq prestataires. Regardez ce qu’il en reste à l’arrivée. Puis rejouez la partie, à la manière Webloo.", "يمرّ طلب العميل عادةً على خمسة مزوّدين. تابع ما يتبقّى منه عند الوصول، ثم أعد التجربة على طريقة Webloo."],
    "The usual way": ["Le scénario habituel", "الطريقة المعتادة"],
    "With Webloo": ["Avec Webloo", "مع Webloo"],
    "The brief": ["Le brief", "الطلب"],
    "Sell out a brand-new basketball tournament in Rabat.": ["Jouer à guichets fermés pour un tout nouveau tournoi de basket à Rabat.", "نفاد تذاكر بطولة جديدة لكرة السلة في الرباط."],
    "Brand agency": ["Agence de marque", "وكالة الهوية"],
    "A bold campaign for a new basketball tournament.": ["Une campagne audacieuse pour un nouveau tournoi de basket.", "حملة جريئة لبطولة جديدة لكرة السلة."],
    "Lost: nothing yet": ["Perdu : rien, pour l’instant", "ما ضاع: لا شيء… حتى الآن"],
    "✓ Brief intact": ["✓ Brief intact", "✓ الطلب كما هو"],
    "Dev shop": ["Prestataire web", "شركة التطوير"],
    "A website for the tournament. Add a ticket link.": ["Un site pour le tournoi. Avec un lien billetterie.", "موقع للبطولة، ورابط لشراء التذاكر."],
    "Lost: selling out": ["Perdu : les guichets fermés", "ما ضاع: هدف نفاد التذاكر"],
    "Media buyer": ["Agence média", "وكالة شراء الإعلانات"],
    "Ads for basketball. Drive traffic.": ["Des pubs sur le basket. Faire du trafic.", "إعلانات عن كرة السلة… لجلب الزيارات."],
    "Lost: the tournament": ["Perdu : le tournoi", "ما ضاع: البطولة نفسها"],
    "Merch partner": ["Fournisseur merchandising", "مورّد المنتجات"],
    "T-shirts. In stock in six weeks.": ["Des t-shirts. Disponibles dans six semaines.", "قمصان… تصل بعد ستة أسابيع."],
    "Lost: the tickets": ["Perdu : la billetterie", "ما ضاع: التذاكر"],
    "Event producer": ["Producteur événementiel", "منظّم الفعاليات"],
    "An event. Date TBC.": ["Un événement. Date à confirmer.", "فعالية ما. الموعد لم يُحدَّد بعد."],
    "Lost: Rabat, the date": ["Perdu : Rabat, et la date", "ما ضاع: الرباط والموعد"],
    "Result": ["Résultat", "النتيجة"],
    "Empty seats. Five invoices. Nobody owns the result.": ["Des tribunes vides. Cinq factures. Et personne responsable du résultat.", "مدرجات فارغة، وخمس فواتير، ولا أحد مسؤول عن النتيجة."],
    "Now run it with Webloo": ["Rejouer avec Webloo", "أعد التجربة مع Webloo"],
    "Replay the usual way": ["Revoir le scénario habituel", "شاهد الطريقة المعتادة"],
    "One campaign, in Arabic, French and English.": ["Une seule campagne, en arabe, en français et en anglais.", "حملة واحدة بالعربية والفرنسية والإنجليزية."],
    "A sales funnel that turns attention into tickets.": ["Un tunnel de vente qui transforme l’attention en billets.", "مسار بيع يحوّل الاهتمام إلى تذاكر."],
    "Paid, influencers, TV, radio and billboards in Rabat and Casablanca.": ["Social ads, influence, TV, radio et affichage à Rabat et Casablanca.", "إعلانات رقمية ومؤثّرون وتلفزيون وإذاعة ولوحات إعلانية في الرباط والدار البيضاء."],
    "Group sales and community outreach to fill every section.": ["Ventes groupes et actions de proximité pour remplir chaque tribune.", "مبيعات للمجموعات وتواصل ميداني مع الجمهور لملء كل المدرجات."],
    "Webloo Digital · Campaign": ["Webloo Digital · Campagne", "Webloo Digital · الحملة"],
    "Webloo Digital · Platform": ["Webloo Digital · Plateforme", "Webloo Digital · المنصّة"],
    "Webloo Digital · Media": ["Webloo Digital · Médias", "Webloo Digital · الإعلام"],
    "Webloo Sports · Sales": ["Webloo Sports · Ventes", "Webloo Sports · المبيعات"],
    "Basketball Africa League, Rabat: 91% sell-through in 12 weeks. One team owned the result.": ["Basketball Africa League, Rabat : 91 % des billets vendus en 12 semaines. Une seule équipe, comptable du résultat.", "Basketball Africa League في الرباط: نفاد 91% من التذاكر خلال 12 أسبوعًا، وفريق واحد تحمّل مسؤولية النتيجة."],
    "Choose how the brief travels": ["Choisissez le parcours du brief", "اختر طريق الطلب"],
    "(02) Pull your thread": ["(02) Tirez le fil", "(02) ارسم مسارك"],
    "What do you": ["Que voulez-vous", "ما الذي"],
    "need to grow?": ["faire grandir ?", "تريد أن تنمّيه؟"],
    "Pick an outcome. Watch our ecosystem route it through the units it needs, as one team, with no hand-offs.": ["Choisissez un objectif. Notre écosystème trace le chemin à travers les pôles nécessaires : une seule équipe, aucun relais.", "اختر هدفك، وشاهد منظومتنا ترسم الطريق إليه عبر الوحدات التي يحتاجها: فريق واحد، دون وسطاء."],
    "Open an official store": ["Ouvrir une boutique officielle", "إطلاق متجر رسمي"],
    "Fill a stadium": ["Remplir un stade", "ملء المدرجات"],
    "Win sponsors": ["Convaincre des sponsors", "استقطاب الرعاة"],
    "Launch a brand": ["Lancer une marque", "إطلاق علامة"],
    "Grow online": ["Croître en ligne", "النمو رقميًا"],
    "Launch a live venue": ["Lancer une salle de spectacle", "افتتاح فضاء للعروض"],
    "Your thread": ["Votre fil", "مسارك"],
    "Brand": ["Marque", "الهوية"],
    "Platform": ["Plateforme", "المنصّة"],
    "Media": ["Médias", "الإعلام"],
    "Sponsorship": ["Sponsoring", "الرعاية"],
    "Store": ["Boutique", "المتجر"],
    "Live & content": ["Live & contenus", "الفعاليات والمحتوى"],
    "1 business unit": ["1 pôle", "وحدة واحدة"],
    "2 business units": ["2 pôles", "وحدتان"],
    "3 business units": ["3 pôles", "3 وحدات"],
    "4 business units": ["4 pôles", "4 وحدات"],
    "· 1 team ·": ["· une seule équipe ·", "· فريق واحد ·"],
    "0 hand-offs": ["zéro relais", "دون وسطاء"],
    "Proof · ": ["Référence · ", "من أعمالنا · "],
    "Proof · Royal Moroccan Football Federation": ["Référence · Fédération Royale Marocaine de Football", "من أعمالنا · الجامعة الملكية المغربية لكرة القدم"],
    "Royal Moroccan Football Federation": ["Fédération Royale Marocaine de Football", "الجامعة الملكية المغربية لكرة القدم"],
    "Haier Europe × Morocco national team": ["Haier Europe × Lions de l’Atlas", "Haier Europe × أسود الأطلس"],
    "CAF · AFCON 2025": ["CAF · CAN 2025", "الكاف · كأس أمم إفريقيا 2025"],
    "Platform, official store and fan moments, run as one programme.": ["Plateforme, boutique officielle et moments supporters, pilotés comme un seul programme.", "منصّة رقمية ومتجر رسمي ولحظات مع الجماهير، يديرها برنامج واحد."],
    "A new tournament, sold out in Morocco.": ["Un tournoi inédit, à guichets fermés au Maroc.", "بطولة جديدة… نفدت تذاكرها في المغرب."],
    "A brand new to football, activated at the top level.": ["Une marque qui découvre le football, activée au plus haut niveau.", "علامة تدخل عالم كرة القدم لأول مرة، ومن أكبر أبوابه."],
    "The official logo reveal film, from casting to soundtrack.": ["Le film officiel de révélation du logo, du casting à la bande originale.", "الفيلم الرسمي للكشف عن الشعار، من اختيار الوجوه إلى الموسيقى."],
    "The luxury car marketplace, rebuilt and put in front of buyers.": ["La place de marché des voitures de luxe, repensée et mise sous les yeux des acheteurs.", "سوق السيارات الفاخرة، بحلّة جديدة وأمام المشترين الحقيقيين."],
    "Morocco's biggest stage: the match, the music, the roar.": ["La plus grande scène du Maroc : le match, la musique, la clameur.", "أكبر منصّة للفرجة في المغرب: المباراة، الموسيقى، هدير الجماهير."],
    "<b>10B</b> impressions a year": ["<b>10 milliards</b> d’impressions par an", "<b>10 مليارات</b> ظهور سنويًا"],
    "impressions a year": ["d’impressions par an", "ظهور سنويًا"],
    "<b>91%</b> sell-through in 12 weeks": ["<b>91 %</b> des billets vendus en 12 semaines", "<b>91%</b> من التذاكر نفدت في 12 أسبوعًا"],
    "Content · PR · OOH · app": ["Contenus · RP · affichage · appli", "محتوى · علاقات عامة · لوحات إعلانية · تطبيق"],
    "<b>2</b> weeks, brief to launch": ["<b>2</b> semaines du brief au lancement", "<b>أسبوعان</b> من الطلب إلى الإطلاق"],
    "Platform · growth marketing": ["Plateforme · growth marketing", "منصّة · تسويق النمو"],
    "Brand · campaign · ticketing · live": ["Marque · campagne · billetterie · live", "هوية · حملة · تذاكر · عروض حيّة"],
    "Choose an outcome": ["Choisissez un objectif", "اختر هدفك"],
    "(03) The ecosystem": ["(03) L’écosystème", "(03) المنظومة"],
    "Four business units.": ["Quatre pôles.", "أربع وحدات."],
    "One line through all of them.": ["Un seul fil pour les relier.", "وفريق واحد يجمعها."],
    "Brand, technology and media. Platforms built, then put in front of customers through search, social, TV, radio and outdoor.": ["Marque, technologie et médias. Nous construisons les plateformes, puis les faisons connaître : search, réseaux sociaux, TV, radio et affichage.", "الهوية والتقنية والإعلام. نبني المنصّات، ثم نوصلها إلى جمهورك عبر محركات البحث ومواقع التواصل والتلفزيون والإذاعة واللوحات الإعلانية."],
    "Sponsorship, rights and fans. Federations, leagues and clubs grow commercial revenue; sponsors activate partnerships that pay back.": ["Sponsoring, droits et supporters. Fédérations, ligues et clubs développent leurs revenus ; les sponsors activent des partenariats rentables.", "الرعاية والحقوق والجماهير. ننمّي المداخيل التجارية للاتحادات والدوريات والأندية، ونساعد الرعاة على تفعيل شراكات مربحة."],
    "E-commerce, merchandise and stores. Official shops and licensed product run end to end, from inventory to fulfilment.": ["E-commerce, merchandising et boutiques. Boutiques officielles et produits sous licence, gérés de bout en bout, du stock à la livraison.", "التجارة الإلكترونية والمنتجات والمتاجر. ندير المتاجر الرسمية والمنتجات المرخّصة من الألف إلى الياء، من المخزون إلى التوصيل."],
    "Content and live. Studios for film and photography; Live for events, fan zones and brand activations.": ["Contenus et live. Des studios pour le film et la photo ; une équipe Live pour les événements, les fan zones et les activations de marque.", "المحتوى والفعاليات. استوديوهات للتصوير والإنتاج، وفريق للفعاليات الحيّة ومناطق المشجعين وتفعيل العلامات."],
    "FRMF official store · CAF Store": ["Boutique officielle FRMF · CAF Store", "المتجر الرسمي للجامعة · CAF Store"],
    "(04) Selected work": ["(04) Réalisations", "(04) من أعمالنا"],
    "Where the thread has run.": ["Là où le fil nous a menés.", "مشاريع رافقناها من البداية إلى النهاية."],
    "Campaign in Arabic, French and English, paid and influencer media, TV, radio and billboards, sales funnel and group sales.": ["Campagne en arabe, en français et en anglais, social ads et influence, TV, radio et affichage, tunnel de vente et ventes groupes.", "حملة بالعربية والفرنسية والإنجليزية، إعلانات رقمية ومؤثّرون، تلفزيون وإذاعة ولوحات، مسار بيع ومبيعات للمجموعات."],
    "sell-through in 12 weeks": ["des billets vendus en 12 semaines", "من التذاكر نفدت في 12 أسبوعًا"],
    "The official logo reveal film, from casting to soundtrack, in two weeks.": ["Le film officiel de révélation du logo, du casting à la bande originale, en deux semaines.", "الفيلم الرسمي للكشف عن الشعار، من اختيار الوجوه إلى الموسيقى، في أسبوعين."],
    "Creative direction, casting, art direction, VFX, animation and an original soundtrack.": ["Direction de création, casting, direction artistique, VFX, animation et musique originale.", "إدارة إبداعية، اختيار الوجوه، إدارة فنية، مؤثرات بصرية، تحريك، وموسيقى أصلية."],
    "National team content, PR and outdoor that put a new sponsor on the map.": ["Contenus avec les Lions de l’Atlas, RP et affichage : un nouveau sponsor s’impose.", "محتوى مع أسود الأطلس وعلاقات عامة ولوحات إعلانية جعلت راعيًا جديدًا اسمًا يعرفه الجميع."],
    "Where luxury cars are traded with confidence, rebuilt as a modern marketplace.": ["Là où les voitures de luxe s’échangent en confiance, repensé en place de marché moderne.", "حيث تُباع السيارات الفاخرة وتُشترى بثقة، في سوق رقمية عصرية."],
    "Platform redesign and growth marketing for the luxury car marketplace.": ["Refonte de la plateforme et growth marketing.", "إعادة تصميم المنصّة وتسويق للنمو."],
    "▶ Film": ["▶ Film", "▶ الفيلم"],
    "Paid social and content for Miami's premier automotive event.": ["Social ads et contenus pour le grand rendez-vous automobile de Miami.", "إعلانات ومحتوى لأبرز حدث للسيارات في Miami."],
    "Paid social, social media management and content strategy, delivered in six weeks.": ["Social ads, animation des réseaux et stratégie de contenu, livrés en six semaines.", "إعلانات على مواقع التواصل، وإدارة للحسابات، واستراتيجية محتوى، في ستة أسابيع."],
    "Brand, campaign, ticketing and live production for concerts and match nights.": ["Marque, campagne, billetterie et production live pour les concerts et les soirs de match.", "الهوية والحملة والتذاكر والإنتاج الحيّ للحفلات وليالي المباريات."],
    "The 50th anniversary edition, from identity to digital presence.": ["L’édition des 50 ans, de l’identité à la présence digitale.", "الدورة الخمسون، من الهوية البصرية إلى الحضور الرقمي."],
    "Anniversary identity, campaign and digital presence.": ["Identité anniversaire, campagne et présence digitale.", "هوية الذكرى، والحملة، والحضور الرقمي."],
    "A patient-first platform for a physician network.": ["Une plateforme pensée pour les patients, au service d’un réseau de médecins.", "منصّة تضع المريض أولًا، لشبكة من الأطباء."],
    "Patient-first website and growth marketing for a physician network.": ["Site pensé pour les patients et growth marketing pour un réseau de médecins.", "موقع يضع المريض أولًا، وتسويق للنمو لشبكة من الأطباء."],
    "Wydad Athletic Club": ["Wydad Athletic Club", "نادي الوداد الرياضي"],
    "Together Forever: a club identity built for its supporters.": ["Together Forever : une identité de club pensée pour ses supporters.", "«Together Forever»: هوية نادٍ صُنعت لجماهيره."],
    "Club campaign and identity built with and for its supporters.": ["Campagne et identité construites avec et pour les supporters.", "حملة وهوية بُنيتا مع الجماهير ومن أجلها."],
    "FIFA U-17 Women's World Cup · Morocco 2025": ["Coupe du Monde Féminine U-17 de la FIFA · Maroc 2025", "كأس العالم للسيدات تحت 17 سنة · المغرب 2025"],
    "Bringing a world cup to fans across Morocco.": ["Faire vivre une Coupe du monde aux supporters de tout le Maroc.", "كأس العالم أقرب إلى الجماهير في كل ربوع المملكة."],
    "Fan engagement and content around a world cup hosted in Morocco.": ["Engagement des supporters et contenus autour d’une Coupe du monde organisée au Maroc.", "تفاعل مع الجماهير ومحتوى يواكب كأس عالم تحتضنه المملكة."],
    "People": ["Experts", "خبيرًا"],
    "Offices": ["Bureaux", "مكاتب"],
    "Business units": ["Pôles", "وحدات"],
    "Hand-offs": ["Relais", "وسطاء"],
    "Trusted by rights holders, brands and institutions": ["Ils nous font confiance : ayants droit, marques et institutions", "يثق بنا أصحاب الحقوق والعلامات والمؤسسات"],
    "Morocco national team training": ["Entraînement des Lions de l’Atlas", "حصة تدريبية لأسود الأطلس"],
    "Morocco fans": ["Supporters marocains", "الجماهير المغربية"],
    "Wydad AC": ["Wydad AC", "الوداد"],
    "FRMF jerseys": ["Maillots des Lions de l’Atlas", "أقمصة المنتخب الوطني"],
    "Moulay Abdellah Stadium": ["Stade Moulay Abdellah", "ملعب مولاي عبد الله"],
    "“We built Webloo to end the hand-off problem. One partner that can design the brand, build the platform, sell the sponsorship, run the store and fill the stadium, without losing the thread.”": ["« Nous avons créé Webloo pour en finir avec les passages de relais. Un seul partenaire capable de concevoir la marque, bâtir la plateforme, vendre le sponsoring, faire tourner la boutique et remplir le stade, sans jamais perdre le fil. »", "«أسّسنا Webloo لننهي مشكلة الوسطاء. شريك واحد يصمّم الهوية، ويبني المنصّة، ويبيع الرعاية، ويدير المتجر، ويملأ الملعب، دون أن يضيع شيء في الطريق.»"],
    "Mehdi Naourass · Founder & President, Webloo": ["Mehdi Naourass · Fondateur et président, Webloo", "Mehdi Naourass · مؤسس Webloo ورئيسها"],
    "(05) In brief": ["(05) En bref", "(05) باختصار"],
    "Webloo, in five answers.": ["Webloo en cinq réponses.", "Webloo في خمسة أجوبة."],
    "What is Webloo?": ["Qu’est-ce que Webloo ?", "ما هي Webloo؟"],
    "Webloo is a growth ecosystem, not an agency. More than 250 people across four business units (Digital, Sports, Retail and Experiences) work as one team, so a brand, federation or league can go from strategy to platform, store, media and live event without changing partners.": ["Webloo n’est pas une agence, c’est un écosystème de croissance. Plus de 250 experts, répartis en quatre pôles (Digital, Sports, Retail et Experiences), travaillent comme une seule équipe. Une marque, une fédération ou une ligue passe ainsi de la stratégie à la plateforme, à la boutique, aux médias et à l’événement sans changer de partenaire.", "Webloo ليست وكالة، بل منظومة متكاملة للنمو. أكثر من 250 خبيرًا في أربع وحدات (Digital وSports وRetail وExperiences) يعملون فريقًا واحدًا، فتنتقل العلامة أو الاتحاد أو الدوري من الاستراتيجية إلى المنصّة والمتجر والإعلام والفعالية دون أن تغيّر شريكها."],
    "What do Webloo's four business units do?": ["Que font les quatre pôles de Webloo ?", "ماذا تقدّم وحدات Webloo الأربع؟"],
    "Webloo Digital builds brands, platforms and media campaigns. Webloo Sports grows commercial revenue for federations, leagues and clubs, and activates sponsorships. Webloo Retail builds and runs official stores and licensed merchandise. Webloo Experiences produces film, content, live events, fan zones and brand activations.": ["Webloo Digital construit des marques, des plateformes et des campagnes médias. Webloo Sports développe les revenus commerciaux des fédérations, ligues et clubs, et active les partenariats. Webloo Retail crée et gère boutiques officielles et produits sous licence. Webloo Experiences produit films, contenus, événements, fan zones et activations de marque.", "تبني Webloo Digital العلامات والمنصّات والحملات الإعلامية. وتنمّي Webloo Sports المداخيل التجارية للاتحادات والدوريات والأندية وتفعّل عقود الرعاية. وتُطلق Webloo Retail المتاجر الرسمية والمنتجات المرخّصة وتديرها. أما Webloo Experiences فتنتج الأفلام والمحتوى والفعاليات ومناطق المشجعين وتفعيل العلامات."],
    "Where is Webloo based?": ["Où est implanté Webloo ?", "أين توجد Webloo؟"],
    "Webloo has offices in Newport Beach (California), Miami (Florida), Rabat (Morocco) and Skopje (North Macedonia), serving clients in North America, Africa, the Middle East and Europe.": ["Webloo a des bureaux à Newport Beach (Californie), Miami (Floride), Rabat (Maroc) et Skopje (Macédoine du Nord), et accompagne des clients en Amérique du Nord, en Afrique, au Moyen-Orient et en Europe.", "لـWebloo مكاتب في Newport Beach (كاليفورنيا) وMiami (فلوريدا) والرباط (المغرب) وSkopje (مقدونيا الشمالية)، وتخدم عملاء في أمريكا الشمالية وإفريقيا والشرق الأوسط وأوروبا."],
    "Who has Webloo worked with?": ["Avec qui Webloo a-t-il travaillé ?", "مع من عملت Webloo؟"],
    "Clients include the Royal Moroccan Football Federation (FRMF), the Confederation of African Football (CAF), the Basketball Africa League (BAL), Haier Europe, Rabat Live Arena, Wydad Athletic Club, Miami Concours, duPont Registry, Retromobile and Catalyst Health Group.": ["Parmi nos clients : la Fédération Royale Marocaine de Football (FRMF), la Confédération Africaine de Football (CAF), la Basketball Africa League (BAL), Haier Europe, Rabat Live Arena, le Wydad Athletic Club, Miami Concours, duPont Registry, Rétromobile et Catalyst Health Group.", "من عملائنا: الجامعة الملكية المغربية لكرة القدم، والاتحاد الإفريقي لكرة القدم (الكاف)، وBasketball Africa League، وHaier Europe، وRabat Live Arena، ونادي الوداد الرياضي، وMiami Concours، وduPont Registry، وRetromobile، وCatalyst Health Group."],
    "How do I start a project with Webloo?": ["Comment lancer un projet avec Webloo ?", "كيف أبدأ مشروعًا مع Webloo؟"],
    "Tell us the outcome you need at hello@webloo.com or through Start a project. We put together the right business units and connect you with a team within one business day.": ["Décrivez-nous votre objectif à hello@webloo.com ou via « Lancer un projet ». Nous réunissons les bons pôles et vous mettons en relation avec une équipe sous un jour ouvré.", "أخبرنا بهدفك عبر hello@webloo.com أو من خلال «ابدأ مشروعك». نجمع الوحدات المناسبة ونصلك بفريقك خلال يوم عمل واحد."],
    "(06) Start a project": ["(06) Lancer un projet", "(06) ابدأ مشروعك"],
    "Where does your": ["Par où commence", "من أين"],
    "thread start?": ["votre projet ?", "يبدأ مشروعك؟"],
    "Tell us the outcome you need. We assemble the units that get you there and connect you with the right team within one business day.": ["Dites-nous ce que vous voulez atteindre. Nous réunissons les pôles qui vous y mèneront et vous présentons la bonne équipe sous un jour ouvré.", "أخبرنا بما تريد تحقيقه، وسنجمع الوحدات التي توصلك إليه ونعرّفك بالفريق المناسب خلال يوم عمل واحد."],
    "Rabat": ["Rabat", "الرباط"],
    "Webloo home": ["Accueil Webloo", "الصفحة الرئيسية لـWebloo"],
    "Main": ["Navigation principale", "القائمة الرئيسية"],
    "Language": ["Langue", "اللغة"],
    "Switch light or dark mode": ["Basculer entre mode clair et sombre", "التبديل بين الوضع الفاتح والداكن"],
    "One thread, five stations": ["Un fil, cinq étapes", "مسار واحد وخمس محطات"],
    "Webloo ecosystem map: the route for the chosen outcome": ["Carte de l’écosystème Webloo : le parcours vers l’objectif choisi", "خريطة منظومة Webloo: الطريق إلى الهدف المختار"],
    "Clients": ["Clients", "العملاء"],
    "Webloo assistant": ["Assistant Webloo", "مساعد Webloo"],
    "Close": ["Fermer", "إغلاق"],
    "Message": ["Message", "رسالة"],
    "Send": ["Envoyer", "إرسال"],
    "Ask Webloo anything": ["Une question ? Écrivez-nous", "اسأل Webloo"],
    "Skip the hand-offs": ["Fini les relais", "وداعًا للوسطاء"],
    "Brief this in 60 seconds": ["Votre brief en 60 secondes", "طلبك في 60 ثانية"],
    "Which unit do I need?": ["Quel pôle pour mon projet ?", "أيّ وحدة تناسبني؟"],
    "Want results like these?": ["Des résultats comme ceux-ci ?", "تريد نتائج كهذه؟"],
    "Talk to a human": ["Parler à quelqu’un", "تحدّث مع فريقنا"],
    "Still have a question?": ["Encore une question ?", "عندك سؤال؟"],
    "Pull ↑": ["Tirez ↑", "اسحب ↑"],
    "Usually replies within one business day": ["Répond généralement sous un jour ouvré", "نردّ عادةً خلال يوم عمل"],
    "Every answer adds to it.": ["Chaque réponse le complète.", "كل جواب يكمّل الصورة."],
    "Goal": ["Objectif", "الهدف"],
    "For": ["Pour", "لمن"],
    "Where": ["Où", "أين"],
    "When": ["Quand", "متى"],
    "You": ["Vous", "أنت"],
    "Your team, from": ["Votre équipe, depuis", "فريقك من"],
    "1 team · ": ["une seule équipe · ", "فريق واحد · "],
    "Type a message…": ["Votre message…", "اكتب رسالتك…"],
    "Type your answer…": ["Votre réponse…", "اكتب جوابك…"],
    "Ask anything…": ["Posez votre question…", "اطرح سؤالك…"],
    "Or describe it in your words…": ["Ou décrivez-le avec vos mots…", "أو صِفه بكلماتك…"],
    "Hi, I'm Webloo. Let's pull your thread in under a minute. <b>What do you want to grow?</b>": ["Bonjour, ici Webloo. Posons les bases de votre projet en moins d’une minute. <b>Que voulez-vous faire grandir ?</b>", "مرحبًا، معك Webloo. لنرسم مسار مشروعك في أقل من دقيقة. <b>ما الذي تريد أن تنمّيه؟</b>"],
    "Good. That brings in <b>{units}</b>. <b>Who is it for?</b>": ["Parfait, cela mobilise <b>{units}</b>. <b>C’est pour qui ?</b>", "ممتاز، هذا يشمل <b>{units}</b>. <b>لمن هذا المشروع؟</b>"],
    "Federation or league": ["Fédération ou ligue", "اتحاد أو دوري"],
    "Club": ["Club", "نادٍ"],
    "A brand": ["Une marque", "علامة تجارية"],
    "Venue or event": ["Salle ou événement", "فضاء أو فعالية"],
    "Healthcare": ["Santé", "الصحة"],
    "Other": ["Autre", "غير ذلك"],
    "<b>Where are your fans or customers?</b>": ["<b>Où se trouvent vos fans ou vos clients ?</b>", "<b>أين يوجد جمهورك أو عملاؤك؟</b>"],
    "Morocco & Africa": ["Maroc et Afrique", "المغرب وإفريقيا"],
    "Middle East": ["Moyen-Orient", "الشرق الأوسط"],
    "Europe": ["Europe", "أوروبا"],
    "North America": ["Amérique du Nord", "أمريكا الشمالية"],
    "Global": ["International", "عالميًا"],
    " + ": [" et ", " و"],
    "Your team would come from <b>{offices}</b>. <b>When does it need to be live?</b>": ["Votre équipe viendrait de <b>{offices}</b>. <b>Pour quand visez-vous le lancement ?</b>", "سيتولّى مشروعك فريقنا في <b>{offices}</b>. <b>متى تريد الإطلاق؟</b>"],
    "This quarter": ["Ce trimestre", "هذا الربع"],
    "In 3 to 6 months": ["D’ici 3 à 6 mois", "خلال 3 إلى 6 أشهر"],
    "Later this year": ["Plus tard cette année", "لاحقًا هذا العام"],
    "Just exploring": ["Je me renseigne", "أستكشف فقط"],
    "Last thing. <b>Your name and email</b>, so the right team can reply.": ["Dernière étape : <b>votre nom et votre e-mail</b>, pour que la bonne équipe vous recontacte.", "خطوة أخيرة: <b>اسمك وبريدك الإلكتروني</b>، ليتواصل معك الفريق المناسب."],
    "Name": ["Nom", "الاسم"],
    "Work email": ["E-mail professionnel", "البريد المهني"],
    "Company": ["Entreprise", "الشركة"],
    "(optional)": ["(facultatif)", "(اختياري)"],
    "Finish my thread →": ["Terminer mon brief →", "أكمِل طلبي ←"],
    "Your thread is ready, {name}. <b>One team, {n} units, zero hand-offs.</b> We reply within one business day.": ["C’est noté, {name}. <b>Une seule équipe, {n} pôles, zéro relais.</b> Nous revenons vers vous sous un jour ouvré.", "تمّ يا {name}. <b>فريق واحد يجمع كل ما تحتاجه، دون وسطاء.</b> سنعود إليك خلال يوم عمل واحد."],
    "Send my thread →": ["Envoyer mon brief →", "أرسل طلبي ←"],
    "Copy it": ["Copier", "نسخ"],
    "Copied": ["Copié", "تم النسخ"],
    "Hi, I'm Webloo. <b>How can we help?</b>": ["Bonjour, ici Webloo. <b>Comment pouvons-nous vous aider ?</b>", "مرحبًا، معك Webloo. <b>كيف نساعدك؟</b>"],
    "What does Webloo do?": ["Que fait Webloo ?", "ماذا تفعل Webloo؟"],
    "Where are you based?": ["Où êtes-vous basés ?", "أين مكاتبكم؟"],
    "Who have you worked with?": ["Avec qui avez-vous travaillé ?", "مع من عملتم؟"],
    "We are 250+ people in <b>Newport Beach</b> and <b>Miami</b> (USA), <b>Rabat</b> (Morocco) and <b>Skopje</b> (North Macedonia).": ["Nous sommes plus de 250 experts à <b>Newport Beach</b> et <b>Miami</b> (États-Unis), à <b>Rabat</b> (Maroc) et à <b>Skopje</b> (Macédoine du Nord).", "نحن أكثر من 250 خبيرًا في <b>Newport Beach</b> و<b>Miami</b> (الولايات المتحدة)، و<b>الرباط</b> (المغرب)، و<b>Skopje</b> (مقدونيا الشمالية)."],
    "FRMF, CAF, the Basketball Africa League, Haier Europe, Rabat Live Arena, Wydad AC, Miami Concours, duPont Registry, Retromobile and Catalyst Health Group, among others.": ["La FRMF, la CAF, la Basketball Africa League, Haier Europe, Rabat Live Arena, le Wydad AC, Miami Concours, duPont Registry, Rétromobile et Catalyst Health Group, entre autres.", "الجامعة الملكية المغربية لكرة القدم، والكاف، وBasketball Africa League، وHaier Europe، وRabat Live Arena، والوداد، وMiami Concours، وduPont Registry، وRetromobile، وCatalyst Health Group، وغيرهم."],
    "We are always glad to meet good people. Send your CV and portfolio to <a href=\"mailto:hello@webloo.com?subject=Careers\">hello@webloo.com</a>.": ["Nous aimons rencontrer de nouveaux talents. Envoyez votre CV et votre portfolio à <a href=\"mailto:hello@webloo.com?subject=Careers\">hello@webloo.com</a>.", "يسعدنا دائمًا التعرّف على مواهب جديدة. أرسل سيرتك الذاتية ونماذج من أعمالك إلى <a href=\"mailto:hello@webloo.com?subject=Careers\">hello@webloo.com</a>."],
    "It depends on the outcome and the units involved. We work by scope, by time and materials, or as a partner sharing the result. The fastest way to a number is a 60-second brief.": ["Cela dépend de l’objectif et des pôles mobilisés. Nous travaillons au forfait, en régie, ou en partenariat avec partage des résultats. Le plus rapide pour obtenir un chiffre : un brief de 60 secondes.", "يتوقّف ذلك على هدفك والوحدات التي يحتاجها. نعمل بميزانية محدّدة، أو حسب الوقت والموارد، أو كشركاء نتقاسم النتائج. وأسرع طريق إلى رقم واضح طلبٌ لا يستغرق 60 ثانية."],
    "Webloo is a growth ecosystem, not an agency. Four business units work as one team: <b>Digital</b> (brand, platforms, media), <b>Sports</b> (sponsorship, rights, fans), <b>Retail</b> (official stores, merchandise) and <b>Experiences</b> (content, live events, fan zones).": ["Webloo n’est pas une agence, c’est un écosystème de croissance. Quatre pôles travaillent comme une seule équipe : <b>Digital</b> (marque, plateformes, médias), <b>Sports</b> (sponsoring, droits, supporters), <b>Retail</b> (boutiques officielles, merchandising) et <b>Experiences</b> (contenus, événements, fan zones).", "Webloo ليست وكالة، بل منظومة متكاملة للنمو. أربع وحدات تعمل فريقًا واحدًا: <b>Digital</b> (الهوية والمنصّات والإعلام)، و<b>Sports</b> (الرعاية والحقوق والجماهير)، و<b>Retail</b> (المتاجر الرسمية والمنتجات)، و<b>Experiences</b> (المحتوى والفعاليات ومناطق المشجعين)."],
    "Good question. I'm a simple assistant for now, so let me connect you with the team, or we can start a 60-second brief.": ["Bonne question. Je ne suis qu’un assistant simple pour l’instant : je peux vous mettre en relation avec l’équipe, ou lancer un brief de 60 secondes.", "سؤال وجيه. ما زلت مساعدًا بسيطًا، لذا يمكنني أن أصلك بفريقنا، أو نبدأ طلبًا في 60 ثانية."],
    "Of course. Email <a href=\"mailto:hello@webloo.com\">hello@webloo.com</a> or call <a href=\"tel:+19493925241\">+1 (949) 392-5241</a>. A real person replies within one business day.": ["Bien sûr. Écrivez à <a href=\"mailto:hello@webloo.com\">hello@webloo.com</a> ou appelez le <a href=\"tel:+19493925241\">+1 (949) 392-5241</a>. Une vraie personne vous répond sous un jour ouvré.", "بكل سرور. راسلنا على <a href=\"mailto:hello@webloo.com\">hello@webloo.com</a> أو اتصل على <a href=\"tel:+19493925241\" dir=\"ltr\">+1 (949) 392-5241</a>. سيردّ عليك أحد أفراد فريقنا خلال يوم عمل واحد."],
    "AFCON 2025 logo craft": ["Conception du logo de la CAN 2025", "تصميم شعار كأس أمم إفريقيا 2025"],
    "Basketball Africa League players": ["Joueurs de la Basketball Africa League", "لاعبو Basketball Africa League"],
    "Catalyst Physician Group website": ["Site de Catalyst Physician Group", "موقع Catalyst Physician Group"],
    "FIFA U-17 Women's World Cup Morocco 2025": ["Coupe du Monde Féminine U-17 de la FIFA, Maroc 2025", "كأس العالم للسيدات تحت 17 سنة، المغرب 2025"],
    "FRMF official store campaign": ["Campagne de la boutique officielle de la FRMF", "حملة المتجر الرسمي للجامعة الملكية المغربية لكرة القدم"],
    "FRMF official store with Morocco national team players": ["Boutique officielle de la FRMF avec les joueurs des Lions de l’Atlas", "المتجر الرسمي للجامعة مع لاعبي أسود الأطلس"],
    "FRMF store app screens": ["Écrans de l’application boutique de la FRMF", "شاشات تطبيق متجر الجامعة"],
    "Haier Europe digital campaign": ["Campagne digitale Haier Europe", "الحملة الرقمية لـHaier Europe"],
    "Haier x Morocco: Play with the number ones": ["Haier x Maroc : Play with the number ones", "Haier × المغرب: Play with the number ones"],
    "Hypercar on the red carpet at Miami Concours": ["Une hypercar sur le tapis rouge du Miami Concours", "سيارة خارقة على السجادة الحمراء في Miami Concours"],
    "Moulay Abdellah Stadium screen, Morocco vs France": ["Écran du stade Moulay Abdellah, Maroc-France", "شاشة ملعب مولاي عبد الله، المغرب وفرنسا"],
    "Rabat Live Arena campaign: The match. The music. The roar.": ["Campagne Rabat Live Arena : le match, la musique, la clameur.", "حملة Rabat Live Arena: المباراة، الموسيقى، هدير الجماهير."],
    "Rabat Live Arena concert": ["Concert au Rabat Live Arena", "حفل في Rabat Live Arena"],
    "Retromobile 50th anniversary identity": ["Identité des 50 ans de Rétromobile", "هوية الذكرى الخمسين لـRetromobile"],
    "Webloo fan zone stage built inside a stadium": ["Scène de fan zone montée par Webloo dans un stade", "منصّة منطقة المشجعين التي أقامتها Webloo داخل ملعب"],
    "Wydad AC: Together Forever": ["Wydad AC : Together Forever", "الوداد: Together Forever"],
    "Wydad Athletic Club crest": ["Écusson du Wydad Athletic Club", "شعار نادي الوداد الرياضي"],
    "duPont Registry website": ["Site de duPont Registry", "موقع duPont Registry"],
    "Seen": ["Vu", "تمّت القراءة"],
    "Almost there. <b>What should we call you?</b>": ["On y est presque. <b>Comment vous appelez-vous ?</b>", "اقتربنا. <b>ما اسمك؟</b>"],
    "Your name": ["Votre nom", "اسمك"],
    "Nice to meet you, {name}. <b>Your work email?</b> That is where the team will reply.": ["Enchanté, {name}. <b>Votre e-mail professionnel ?</b> C’est là que l’équipe vous répondra.", "تشرّفنا يا {name}. <b>ما بريدك المهني؟</b> عليه سيصلك ردّ الفريق."],
    "Hmm, that email does not look right. <b>Could you check it?</b>": ["Hmm, cette adresse semble incomplète. <b>Pouvez-vous la vérifier ?</b>", "يبدو أن البريد غير مكتمل. <b>هل يمكنك التحقّق منه؟</b>"],
    "And the company or organisation? <i>(optional)</i>": ["Et l’entreprise ou l’organisation ? <i>(facultatif)</i>", "وما اسم الشركة أو المؤسسة؟ <i>(اختياري)</i>"],
    "Skip": ["Passer", "تخطٍّ"],
    "FRMF · CAF · Wydad AC · BAL · Haier": ["FRMF · CAF · Wydad AC · BAL · Haier", "FRMF · الكاف · الوداد · BAL · Haier"],
    "FRMF · duPont Registry · Catalyst Health Group · Haier": ["FRMF · duPont Registry · Catalyst Health Group · Haier", "FRMF · duPont Registry · Catalyst Health Group · Haier"],
    "Rabat Live Arena · AFCON 2025 · Miami Concours · Retromobile": ["Rabat Live Arena · CAN 2025 · Miami Concours · Rétromobile", "Rabat Live Arena · كأس أمم إفريقيا 2025 · Miami Concours · Retromobile"],
    "Skip to content": ["Aller au contenu", "انتقل إلى المحتوى"],
    "Menu": ["Menu", "القائمة"],
    "Close menu": ["Fermer le menu", "إغلاق القائمة"],
    "Showing": ["Projets", "مشاريع"],
    "Show all work": ["Tout afficher", "عرض كل المشاريع"],
    "Start a project like this": ["Lancer un projet similaire", "ابدأ مشروعًا مماثلًا"],
    "Previous project": ["Projet précédent", "المشروع السابق"],
    "Next project": ["Projet suivant", "المشروع التالي"],
    "Open project: {title}": ["Voir le projet : {title}", "عرض المشروع: {title}"],
    "Match day, from the big screens to the stands.": ["Le jour de match, des écrans géants aux tribunes.", "يوم المباراة، من الشاشات العملاقة إلى المدرجات."],
    "Screen content and fan moments for the Morocco national team at home.": ["Contenus pour les écrans et moments supporters pour les Lions de l’Atlas à domicile.", "محتوى للشاشات ولحظات مع الجماهير لأسود الأطلس على أرضهم."],
    "One home for the national team's fans.": ["Un seul rendez-vous pour tous les supporters des Lions.", "منصّة واحدة تجمع جماهير المنتخب."],
    "Fan platform and store app: follow the team, buy the official kit, join match days.": ["Plateforme supporters et appli boutique : suivre l’équipe, acheter le maillot officiel, vivre les jours de match.", "منصّة للجماهير وتطبيق للمتجر: تابع المنتخب، اقتنِ القميص الرسمي، وعِش أجواء المباريات."],
    "The official home of the Morocco jersey, online.": ["La maison officielle du maillot du Maroc, en ligne.", "البيت الرسمي لقميص المنتخب المغربي، على الإنترنت."],
    "E-commerce, licensed product and a campaign around every national team release.": ["E-commerce, produits sous licence et une campagne à chaque nouvelle sortie de l’équipe nationale.", "تجارة إلكترونية، ومنتجات مرخّصة، وحملة مع كل إصدار جديد للمنتخب."],
    "(07) Start a project": ["(07) Lancer un projet", "(07) ابدأ مشروعك"],
    "Careers": ["Carrières", "الوظائف"],
    "(06) Careers": ["(06) Carrières", "(06) انضمّ إلينا"],
    "Join one team,": ["Rejoignez une équipe,", "انضمّ إلى فريق واحد،"],
    "not five agencies.": ["pas cinq agences.", "لا إلى خمس وكالات."],
    "A Webloo stage, built by the team": ["Une scène Webloo, montée par l’équipe", "منصّة من إنجاز فريق Webloo"],
    "250+ people across four units and four cities. Here, the people who shape the idea stay until the stadium is full.": ["Plus de 250 experts, quatre pôles, quatre villes. Ici, ceux qui imaginent le projet restent jusqu’à ce que le stade soit plein.", "أكثر من 250 خبيرًا في أربع وحدات وأربع مدن. هنا، من يصنع الفكرة يبقى معها حتى تمتلئ المدرجات."],
    "Design, engineering, media": ["Design, développement, médias", "التصميم والتطوير والإعلام"],
    "Partnerships, sponsorship, fans": ["Partenariats, sponsoring, supporters", "الشراكات والرعاية والجماهير"],
    "E-commerce, merchandise, operations": ["E-commerce, merchandising, opérations", "التجارة الإلكترونية والمنتجات والعمليات"],
    "Production, film, live events": ["Production, film, événements live", "الإنتاج والتصوير والفعاليات الحيّة"],
    "Send your CV": ["Envoyer votre CV", "أرسل سيرتك الذاتية"],
    "No role that fits? Write to us anyway.": ["Aucun poste ne vous correspond ? Écrivez-nous quand même.", "لم تجد الدور المناسب؟ راسلنا على أي حال."],
    "Newport Beach · Miami · Rabat · Skopje": ["Newport Beach · Miami · Rabat · Skopje", "Newport Beach · Miami · الرباط · Skopje"],
    "Budget": ["Budget", "الميزانية"],
    "<b>What budget range are you working with?</b>": ["<b>Quelle est votre fourchette de budget ?</b>", "<b>ما الميزانية التقريبية لمشروعك؟</b>"],
    "Under $25K": ["Moins de 25 K$", "أقل من 25 ألف دولار"],
    "$25K to $50K": ["25 à 50 K$", "من 25 إلى 50 ألف دولار"],
    "$50K to $100K": ["50 à 100 K$", "من 50 إلى 100 ألف دولار"],
    "$100K to $250K": ["100 à 250 K$", "من 100 إلى 250 ألف دولار"],
    "$250K+": ["Plus de 250 K$", "أكثر من 250 ألف دولار"],
    "Not sure yet": ["Je ne sais pas encore", "لم أحدّد بعد"],
    "<b>How would you like to work with us?</b> As an agency, we deliver for a fee. As a venture, we invest our work and share the result.": ["<b>Comment souhaitez-vous travailler avec nous ?</b> En mode agence, nous livrons contre des honoraires. En mode venture, nous investissons notre travail et partageons le résultat.", "<b>كيف تفضّل أن نعمل معًا؟</b> كوكالة: ننجز العمل مقابل أتعاب. كشريك (Venture): نستثمر عملنا ونتقاسم النتائج."],
    "Agency": ["Agence", "وكالة"],
    "Venture": ["Venture", "شراكة (Venture)"],
    "<b>Tell us a little more about the project.</b> A few lines is plenty.": ["<b>Parlez-nous un peu plus du projet.</b> Quelques lignes suffisent.", "<b>حدّثنا قليلًا عن المشروع.</b> بضعة أسطر تكفي."],
    "Describe it in your words…": ["Décrivez-le avec vos mots…", "صِفه بكلماتك…"],
    "A phone number, if you prefer a call? <i>(optional)</i>": ["Un numéro de téléphone, si vous préférez un appel ? <i>(facultatif)</i>", "رقم هاتف إن كنت تفضّل مكالمة؟ <i>(اختياري)</i>"],
    "That number looks incomplete. <b>Try again, or skip.</b>": ["Ce numéro semble incomplet. <b>Réessayez, ou passez.</b>", "يبدو أن الرقم غير مكتمل. <b>أعد المحاولة أو تخطَّ.</b>"],
    "Last thing. <b>Can we use these details to reply to you?</b> See our <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a>.": ["Dernière chose. <b>Pouvons-nous utiliser ces informations pour vous répondre ?</b> Voir notre <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">politique de confidentialité</a>.", "أمر أخير. <b>هل نستخدم هذه المعلومات للردّ عليك؟</b> اطّلع على <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">سياسة الخصوصية</a>."],
    "I agree": ["J’accepte", "أوافق"],
    "Not now": ["Pas maintenant", "ليس الآن"],
    "No problem. Nothing has been sent. You can write to us any time at <a href=\"mailto:{email}\">{email}</a>.": ["Aucun souci, rien n’a été envoyé. Vous pouvez nous écrire à tout moment à <a href=\"mailto:{email}\">{email}</a>.", "لا مشكلة، لم يُرسَل أي شيء. يمكنك مراسلتنا في أي وقت على <a href=\"mailto:{email}\">{email}</a>."],
    "Prefer to talk it through? <b>Book a 30-minute intro call</b> with the team, on Google Meet.": ["Vous préférez en parler ? <b>Réservez un appel de 30 minutes</b> avec l’équipe, sur Google Meet.", "تفضّل الحديث مباشرة؟ <b>احجز مكالمة تعارف مدّتها 30 دقيقة</b> مع الفريق عبر Google Meet."],
    "Book a call": ["Réserver un appel", "احجز مكالمة"],
    "Introduction to Webloo": ["Découvrir Webloo", "تعرّف على Webloo"],
    "30 min · Google Meet": ["30 min · Google Meet", "30 دقيقة · Google Meet"],
    "Open the calendar in a new tab ↗": ["Ouvrir l’agenda dans un nouvel onglet ↗", "افتح التقويم في نافذة جديدة ↗"],
    "Intro call": ["Appel découverte", "مكالمة التعارف"],
    "30 min · Google Meet · with the {office} team": ["30 min · Google Meet · avec l’équipe de {office}", "30 دقيقة · Google Meet · مع فريق {office}"],
    "1. Pick a day": ["1. Choisissez un jour", "1. اختر اليوم"],
    "2. Pick a time": ["2. Choisissez une heure", "2. اختر الوقت"],
    "in your time zone": ["dans votre fuseau horaire", "حسب توقيتك"],
    "Choose a day first.": ["Choisissez d’abord un jour.", "اختر اليوم أولًا."],
    "Request this time →": ["Demander ce créneau →", "اطلب هذا الموعد ←"],
    "Requested ✓": ["Demandé ✓", "تم الطلب ✓"],
    "That is {time} in {office}.": ["Soit {time} à {office}.", "أي {time} بتوقيت {office}."],
    "Or book instantly on our live calendar ↗": ["Ou réservez directement sur notre agenda en ligne ↗", "أو احجز فورًا عبر تقويمنا المباشر ↗"],
    "Great choice. <b>What should we call you?</b>": ["Excellent choix. <b>Comment vous appelez-vous ?</b>", "اختيار موفّق. <b>ما اسمك؟</b>"],
    "<b>And your work email?</b> The Google Meet invite goes there.": ["<b>Et votre e-mail professionnel ?</b> L’invitation Google Meet y sera envoyée.", "<b>وما بريدك المهني؟</b> ستصلك عليه دعوة Google Meet."],
    "<b>{time}</b> is held for you. <b>One step left:</b> send your thread and we confirm with a Google Meet invite within one business day.": ["<b>{time}</b> vous est réservé. <b>Dernière étape :</b> envoyez votre brief, et nous confirmons par une invitation Google Meet sous un jour ouvré.", "موعد <b>{time}</b> محجوز لك. <b>بقيت خطوة واحدة:</b> أرسل طلبك وسنؤكّد الموعد بدعوة Google Meet خلال يوم عمل واحد."],
    "Before you go: your call on <b>{time}</b> is not confirmed yet. Send your thread and we will reply with a Google Meet invite.": ["Avant de partir : votre appel du <b>{time}</b> n’est pas encore confirmé. Envoyez votre brief et nous vous répondrons avec une invitation Google Meet.", "قبل أن تغادر: موعد مكالمتك <b>{time}</b> لم يُؤكَّد بعد. أرسل طلبك وسنردّ عليك بدعوة Google Meet."],
    "Webloo, one growth partner for brands, sports, retail and live experiences": ["Webloo, un seul partenaire de croissance pour les marques, le sport, le retail et le live", "Webloo، شريك نموّ واحد للعلامات والرياضة والتجارة والفعاليات"],
    "Webloo in numbers": ["Webloo en chiffres", "Webloo بالأرقام"],
    "Webloo elsewhere": ["Webloo ailleurs", "Webloo على المنصّات"],
    "No hand-offs.": ["Un seul fil.", "بلا وسطاء."],
    "One team, from brand to stadium.": ["Une seule équipe, de la marque au stade.", "فريق واحد، من الهوية إلى الملعب."],
    "(Explore)": ["(Explorer)", "(تصفّح)"],
    "(Ecosystem)": ["(Écosystème)", "(المنظومة)"],
    "(Selected work)": ["(Réalisations)", "(من أعمالنا)"],
    "(Follow)": ["(Suivre)", "(تابعنا)"],
    "Footer": ["Pied de page", "تذييل الصفحة"],
    "Florida, USA": ["Floride, États-Unis", "فلوريدا، الولايات المتحدة"],
    "Morocco": ["Maroc", "المغرب"],
    "North Macedonia": ["Macédoine du Nord", "مقدونيا الشمالية"],
    "620 Newport Center Drive, CA 92660, USA": ["620 Newport Center Drive, CA 92660, États-Unis", "620 Newport Center Drive، CA 92660، الولايات المتحدة"],
    "Privacy Policy": ["Politique de confidentialité", "سياسة الخصوصية"],
    "Haier Europe": ["Haier Europe", "Haier Europe"],
    "250+ experts · Newport Beach · Miami · Rabat · Skopje": ["250+ experts · Newport Beach · Miami · Rabat · Skopje", "أكثر من 250 خبيرًا · Newport Beach · Miami · الرباط · Skopje"],
    "Team members": ["Collaborateurs", "عضوًا في الفريق"],
    "Impressions generated": ["Impressions générées", "ظهور حقّقناه لعملائنا"],
    "Continents": ["Continents", "قارّات"],
    "Projects delivered": ["Projets livrés", "مشروع منجز"],
    "Mehdi Naourass · President, Webloo": ["Mehdi Naourass · Président, Webloo", "Mehdi Naourass · رئيس Webloo"],
    "Webloo is a US and Morocco based growth ecosystem of four business units: Webloo Digital, Webloo Sports, Webloo Retail and Webloo Experiences. More than 250 experts work as one team, so a brand, federation or league can go from strategy to platform, store, media and live event without changing partners.": ["Webloo est un écosystème de croissance basé aux États-Unis et au Maroc, composé de quatre business units : Webloo Digital, Webloo Sports, Webloo Retail et Webloo Experiences. Plus de 250 experts travaillent comme une seule équipe : une marque, une fédération ou une ligue passe ainsi de la stratégie à la plateforme, à la boutique, aux médias et à l’événement sans changer de partenaire.", "Webloo منظومة نموّ مقرّها الولايات المتحدة والمغرب، تضمّ أربع وحدات أعمال: Webloo Digital وWebloo Sports وWebloo Retail وWebloo Experiences. يعمل أكثر من 250 خبيرًا فريقًا واحدًا، فتنتقل العلامة أو الاتحاد أو الدوري من الاستراتيجية إلى المنصّة والمتجر والإعلام والفعالية دون أن تغيّر شريكها."],
    "(04) Industries": ["(04) Industries", "(04) القطاعات"],
    "(05) Selected work": ["(05) Réalisations", "(05) من أعمالنا"],
    "(06) Webloo Loop": ["(06) Webloo Loop", "(06) Webloo Loop"],
    "(07) Insights": ["(07) Insights", "(07) آراء وتحليلات"],
    "(08) Careers": ["(08) Carrières", "(08) انضمّ إلينا"],
    "(09) Start a project": ["(09) Lancer un projet", "(09) ابدأ مشروعك"],
    "Industries": ["Industries", "القطاعات"],
    "Build. Scale. Experience.": ["Build. Scale. Experience.", "نبني. ننمّي. نصنع التجربة."],
    "Build": ["Build", "البناء"],
    "Scale": ["Scale", "النموّ"],
    "Experience": ["Experience", "التجربة"],
    "Strategy, brand, platforms and the assets your growth runs on.": ["Stratégie, marque, plateformes et les actifs sur lesquels repose votre croissance.", "الاستراتيجية والهوية والمنصّات، والأسس التي يقوم عليها نموّك."],
    "Media, sponsorship, retail and the systems that compound results.": ["Médias, sponsoring, retail et les systèmes qui font croître les résultats.", "الإعلام والرعاية والتجارة، والأنظمة التي تضاعف النتائج."],
    "Content and live moments that turn audiences into fans and fans into customers.": ["Contenus et moments live qui transforment une audience en fans, et des fans en clients.", "محتوى ولحظات حيّة تحوّل الجمهور إلى مشجعين، والمشجعين إلى عملاء."],
    "Choose the model that fits": ["Choisissez le modèle qui vous convient", "اختر النموذج الذي يناسبك"],
    "Scope of work": ["Périmètre défini", "نطاق عمل محدّد"],
    "Time & materials": ["Régie en temps passé", "حسب الوقت والموارد"],
    "Partnership": ["Partenariat", "شراكة"],
    "Expertise where": ["L’expertise là où", "خبرة حيث"],
    "it matters to you.": ["elle compte pour vous.", "تحتاجها فعلًا."],
    "We bring the right teams together around your market, your customers and your commercial priorities.": ["Nous réunissons les bonnes équipes autour de votre marché, de vos clients et de vos priorités commerciales.", "نجمع الفرق المناسبة حول سوقك وعملائك وأولوياتك التجارية."],
    "Sports & Entertainment": ["Sport et divertissement", "الرياضة والترفيه"],
    "Legal & Professional": ["Juridique et services professionnels", "القانون والخدمات المهنية"],
    "Retail & Consumer": ["Retail et grande consommation", "التجزئة والاستهلاك"],
    "Finance & Private Equity": ["Finance et private equity", "المالية والاستثمار الخاص"],
    "Automotive & Lifestyle": ["Automobile et lifestyle", "السيارات وأسلوب الحياة"],
    "Commercial growth for the people who own the game.": ["La croissance commerciale de ceux qui font le jeu.", "نموّ تجاري لمن يملكون اللعبة."],
    "Patient growth, built for regulated markets.": ["La croissance patients, pensée pour les marchés réglementés.", "نموّ في عدد المرضى، مصمَّم للأسواق المنظَّمة."],
    "Reputation you can measure.": ["Une réputation qui se mesure.", "سمعة يمكن قياسها."],
    "Sell more, online and in store.": ["Vendre plus, en ligne et en boutique.", "بِع أكثر، عبر الإنترنت وفي المتجر."],
    "Growth programmes for financial brands and portfolio companies.": ["Des programmes de croissance pour les marques financières et les sociétés en portefeuille.", "برامج نموّ للعلامات المالية والشركات ضمن المحافظ الاستثمارية."],
    "Brands people want to be seen with.": ["Des marques avec lesquelles on veut être vu.", "علامات يحبّ الناس أن يظهروا بها."],
    "Growth, run": ["La croissance,", "النموّ،"],
    "as a system.": ["pilotée comme un système.", "يُدار كمنظومة."],
    "Webloo Loop is how our Digital teams plan, produce, launch and learn in one continuous cycle, human-led and powered by AI. See how it would run for your brand.": ["Webloo Loop est la méthode de nos équipes Digital : brief, stratégie, production, lancement et apprentissage en un cycle continu, piloté par des humains et accéléré par l’IA. Découvrez comment il fonctionnerait pour votre marque.", "Webloo Loop هي الطريقة التي تخطّط بها فرق Digital لدينا وتنتج وتطلق وتتعلّم في دورة واحدة متواصلة، يقودها البشر ويعزّزها الذكاء الاصطناعي. اكتشف كيف ستعمل مع علامتك."],
    "Brief": ["Brief", "الطلب"],
    "Plan": ["Stratégie", "التخطيط"],
    "Produce": ["Production", "الإنتاج"],
    "Launch": ["Lancement", "الإطلاق"],
    "Learn": ["Apprentissage", "التعلّم"],
    "See it in action": ["Voir une démonstration", "شاهده عمليًا"],
    "See Webloo Loop in action": ["Voir Webloo Loop en action", "شاهد Webloo Loop عمليًا"],
    "<b>Which model fits best?</b> A defined scope of work, time and materials, or a partnership where we invest alongside you and share the result.": ["<b>Quel modèle vous convient le mieux ?</b> Un périmètre défini, une régie en temps passé, ou un partenariat où nous investissons à vos côtés et partageons le résultat.", "<b>أيّ نموذج يناسبك أكثر؟</b> نطاق عمل محدّد، أو حسب الوقت والموارد، أو شراكة نستثمر فيها إلى جانبك ونتقاسم النتائج."],
    "(Company)": ["(Entreprise)", "(الشركة)"],
    "Contact": ["Contact", "اتصل بنا"],
    "(Industries)": ["(Industries)", "(القطاعات)"],
    "Rabat, Morocco": ["Rabat, Maroc", "الرباط، المغرب"],
    "In partnership with": ["En partenariat avec", "بالشراكة مع"],
    "duPont Registry website on a laptop": ["Le site de duPont Registry sur un ordinateur portable", "موقع duPont Registry على حاسوب محمول"],
    "CAF Store for AFCON 2025": ["La CAF Store de la CAN 2025", "متجر الكاف لكأس أمم إفريقيا 2025"],
    "Rabat Live Arena at night": ["Le Rabat Live Arena de nuit", "Rabat Live Arena ليلًا"],
    "Morocco fans in the stadium": ["Des supporters marocains au stade", "جماهير مغربية في الملعب"],
    "See the work": ["Voir les réalisations", "شاهد أعمالنا"],
    "Talk to the team": ["Parler à l’équipe", "تحدّث مع الفريق"],
    "A defined deliverable, timeline and price.": ["Un livrable, un calendrier et un prix définis.", "مُخرَج محدّد وجدول زمني وسعر واضح."],
    "Specialists billed by the day, for advisory and surge capacity.": ["Des spécialistes facturés à la journée, pour le conseil et les renforts.", "خبراء بأجر يومي، للاستشارة أو لتعزيز فريقك عند الحاجة."],
    "For the right project we co-invest, build and operate alongside you, and are paid from the results.": ["Pour le bon projet, nous co-investissons, construisons et opérons à vos côtés, rémunérés sur les résultats.", "في المشروع المناسب نستثمر ونبني ونشغّل إلى جانبك، ونتقاضى أجرنا من النتائج."],
  };
  const META = {
    title: ["Webloo | Growth ecosystem for brands, sports and retail", "Webloo | Écosystème de croissance : marques, sport, retail", "Webloo | منظومة نموّ للعلامات والرياضة والتجارة"],
    desc: ["Webloo is a growth ecosystem, not an agency: 250+ people across Digital, Sports, Retail and Experiences, from strategy to stadium with no hand-offs.", "Webloo n’est pas une agence mais un écosystème de croissance : 250+ experts en Digital, Sports, Retail et Experiences, de la stratégie au stade.", "Webloo ليست وكالة، بل منظومة نموّ متكاملة: أكثر من 250 خبيرًا في Digital وSports وRetail وExperiences، من الاستراتيجية إلى الملعب، دون وسطاء."],
  };
  const IDX = { en: 0, fr: 1, ar: 2 };
  const norm = s => s.replace(/\s+/g, ' ').trim();
  let lang = document.documentElement.lang in IDX ? document.documentElement.lang : 'en';

  function t(en, vars) {
    let out = en;
    if (lang !== 'en') { const row = D[en] || D[norm(en)]; if (row) out = row[IDX[lang] - 1]; }
    if (vars) for (const k in vars) out = out.split('{' + k + '}').join(vars[k]);
    return out;
  }

  // Collect the page's static text once, while it is still English.
  const nodes = [], attrs = [];
  const skip = el => !el || el.closest('script,style,.thread,.wa,.wa-fab') || (el.closest('svg') && !el.closest('.pull__map'));
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: n => (!skip(n.parentElement) && n.nodeValue.trim() && D[norm(n.nodeValue)]) ? 1 : 2 });
  for (let n; (n = walker.nextNode());) nodes.push([n, n.nodeValue]);
  document.querySelectorAll('[aria-label],[alt],[placeholder]').forEach(el => {
    if (skip(el) && !el.closest('.nav')) return;
    ['aria-label', 'alt', 'placeholder'].forEach(a => { const v = el.getAttribute(a); if (v && D[norm(v)]) attrs.push([el, a, v]); });
  });
  const metaDesc = document.querySelector('meta[name="description"]');

  function apply(next, announce = true) {
    lang = next in IDX ? next : 'en';
    const d = document.documentElement;
    d.lang = lang; d.dir = lang === 'ar' ? 'rtl' : 'ltr';
    nodes.forEach(([n, en]) => {
      if (!n.isConnected) return;
      const lead = en.match(/^\s*/)[0], trail = en.match(/\s*$/)[0];
      n.nodeValue = lead + t(en) + trail;
    });
    attrs.forEach(([el, a, en]) => el.setAttribute(a, t(en)));
    document.title = META.title[IDX[lang]];
    metaDesc && metaDesc.setAttribute('content', META.desc[IDX[lang]]);
    document.querySelectorAll('.lang button').forEach(b => { const on = b.dataset.lang === lang; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
    if (announce) dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  /* ---------- theme ---------- */
  function setTheme(theme) {
    const d = document.documentElement;
    d.classList.add('theme-anim');
    d.setAttribute('data-theme', theme);
    try { localStorage['webloo-theme'] = theme; } catch (e) {}
    setTimeout(() => d.classList.remove('theme-anim'), 400);
  }
  document.querySelector('.theme-btn') && document.querySelector('.theme-btn').addEventListener('click', () =>
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
  const ORDER = ['en', 'fr', 'ar'];
  // Built pages exist per language (/, /fr/, /ar/) so search engines can read each one.
  // Switching language goes to that page and comes back to the same place on it.
  const base = document.documentElement.dataset.base;
  function go(next) {
    try { localStorage['webloo-lang'] = next; } catch (e) {}
    if (base === undefined) return apply(next);          // unbuilt source page: switch in place
    try { sessionStorage['webloo-y'] = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight); } catch (e) {}
    location.href = (base + (next === 'en' ? '' : next + '/')) || './';
  }
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.lang !== lang) return go(b.dataset.lang);
    // compact (phone) mode shows only the current language: tapping it goes to the next one
    if (matchMedia('(max-width: 420px)').matches) go(ORDER[(ORDER.indexOf(lang) + 1) % ORDER.length]);
  }));
  document.querySelectorAll('.foot__langs a').forEach(a => a.addEventListener('click', () => { try { localStorage['webloo-lang'] = a.hreflang; } catch (e) {} }));
  // back on the same spot after a language switch
  let y; try { y = sessionStorage['webloo-y']; sessionStorage.removeItem('webloo-y'); } catch (e) {}
  if (y) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    const back = () => scrollTo(0, +y * (document.documentElement.scrollHeight - innerHeight));
    back(); addEventListener('load', back, { once: true });
  }

  window.WebI18n = { t, get lang() { return lang; }, set: apply };
  apply(lang, false);
})();

;
/* Webloo — the thread.
   One SVG path is built through every .t-anchor on the page, in DOM order,
   and drawn as you scroll. The tip sits a little below the middle of the screen. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = (s, v) => (window.WebI18n ? WebI18n.t(s, v) : s);   // translate text this script creates
  const svg = document.querySelector('.thread');
  const line = svg.querySelector('.thread__line');
  const ghost = svg.querySelector('.thread__ghost');
  const tip = svg.querySelector('.thread__tip');
  const stations = [...document.querySelectorAll('.station')];
  const ctaBtn = document.querySelector('.cta__btn');
  const halo = svg.querySelector('.thread__halo');
  const litEls = [...document.querySelectorAll('[data-lit]')];
  // built pages serve resized WebP copies (assets/img/w/<name>-<width>.webp); /fr/ and /ar/ pages sit one folder down
  const BASE = document.documentElement.dataset.base || '';
  const pic = p => document.documentElement.hasAttribute('data-base') ? BASE + p.replace(/^assets\/img\/(.+)\.\w+$/, 'assets/img/w/$1-800.webp') : p;
  let litLens = [];

  let lastDocH = 0, lastDocW = 0, probes = [];
  // Safety net: if any anchor has moved since the path was built (late images, fonts, jumps), rebuild.
  function layoutMoved() {
    if (document.documentElement.clientWidth !== lastDocW) return true;
    return probes.some(([el, x, y]) => { const p = pos(el); return Math.abs(p.x - x) > 2 || Math.abs(p.y - y) > 8; });
  }
  let total = 0, marks = [], introLen = 0, intro = reduce ? 1 : 0, stationLens = [];

  const visible = el => el.getClientRects().length > 0;
  // Anchors inside the fixed nav live at the top of the page, not at the current scroll position.
  const pos = el => {
    const r = el.getBoundingClientRect();
    if (el.closest('.nav')) {
      const shrink = document.querySelector('.nav').classList.contains('is-scrolled') ? 6 : 0;
      return { x: r.left, y: r.top + shrink, el };
    }
    return { x: r.left + scrollX, y: r.top + scrollY, el };
  };

  function segment(a, b, vh) {
    const dy = b.y - a.y;
    if (Math.abs(dy) < 4) return `L ${b.x} ${b.y}`;               // same row: straight run
    let s = '', start = a;
    if (dy > vh * 1.2) {                                            // long drop: fall straight, then curve
      const mid = { x: a.x, y: b.y - vh * 0.45 };
      s += `L ${mid.x} ${mid.y} `; start = mid;
    }
    const h = (b.y - start.y) / 2;
    return s + `C ${start.x} ${start.y + h} ${b.x} ${b.y - h} ${b.x} ${b.y}`;
  }

  function build() {
    const vh = innerHeight;
    const pts = [...document.querySelectorAll('.t-anchor')].filter(visible).map(pos);
    // page height = bottom of the footer (measuring scrollHeight would include this layer itself)
    const foot = document.querySelector('.foot');
    const docH = Math.ceil(foot.getBoundingClientRect().bottom + scrollY);
    const docW = document.documentElement.clientWidth;
    // exact pixel size, no scaling, so the line always sits on its anchors
    svg.setAttribute('width', docW); svg.setAttribute('height', docH);
    svg.setAttribute('viewBox', `0 0 ${docW} ${docH}`);
    svg.setAttribute('preserveAspectRatio', 'xMinYMin meet');
    svg.style.width = docW + 'px'; svg.style.height = docH + 'px';
    lastDocH = docH; lastDocW = docW;

    // cumulative lengths at each anchor
    const probe = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg.appendChild(probe);
    let d = `M ${pts[0].x} ${pts[0].y}`;
    marks = [{ y: pts[0].y, len: 0, el: pts[0].el }];
    for (let i = 1; i < pts.length; i++) {
      d += ' ' + segment(pts[i - 1], pts[i], vh);
      probe.setAttribute('d', d);
      marks.push({ y: pts[i].y, len: probe.getTotalLength(), el: pts[i].el });
    }
    probe.remove();
    probes = pts.map(p => [p.el, p.x, p.y]);
    // Horizontal runs (anchors on one row) are spread over a slice of scroll,
    // so the line visibly travels across the row instead of appearing at once.
    const k = vh * 0.18;
    for (let i = 1; i < marks.length; i++) {
      if (Math.abs(pts[i].y - pts[i - 1].y) >= 4) continue;
      let j2 = i; while (j2 + 1 < marks.length && Math.abs(pts[j2 + 1].y - pts[i].y) < 4) j2++;
      const y0 = pts[i].y - k, y1 = pts[i].y + k, n = j2 - (i - 1);
      for (let m = i - 1; m <= j2; m++) marks[m].y = y0 + (y1 - y0) * (m - (i - 1)) / n;
      i = j2;
    }
    for (let i = 1; i < marks.length; i++) marks[i].y = Math.max(marks[i].y, marks[i - 1].y + 0.01);
    line.setAttribute('d', d);
    ghost.setAttribute('d', d);
    total = line.getTotalLength();
    line.style.strokeDasharray = `${total} ${total}`;

    stationLens = stations.map(s => (marks.find(m => s.contains(m.el)) || { len: Infinity }).len);
    introLen = stationLens.filter(isFinite).pop() || 0;

    // Elements that light up when the thread passes them: nearest point on the path.
    // coarse pass every 30px, then refine around the best hit (5x fewer path lookups than a fine scan)
    const samples = [];
    for (let l = 0; l <= total; l += 30) { const p = line.getPointAtLength(l); samples.push([l, p.x, p.y]); }
    litLens = litEls.map(el => {
      const si = stations.indexOf(el);                       // stations light exactly when the line reaches their dot
      if (si >= 0 && isFinite(stationLens[si])) return stationLens[si];
      const r = el.getBoundingClientRect(), x = r.left + scrollX + r.width / 2, y = r.top + scrollY;
      const score = (px, py) => Math.abs(py - y) * 3 + Math.abs(px - x) * 0.2 + Math.max(0, Math.abs(px - x) - r.width / 2) * 5;
      let best = Infinity, bl = Infinity;
      for (const [l, px, py] of samples) { const dd = score(px, py); if (dd < best) { best = dd; bl = l; } }
      for (let l = Math.max(0, bl - 30); l <= Math.min(total, bl + 30); l += 3) { const p = line.getPointAtLength(l), dd = score(p.x, p.y); if (dd < best) { best = dd; bl = l; } }
      return best < 260 ? bl : -1;
    });
    draw();
  }

  function scrollLen() {
    const target = scrollY + innerHeight * 0.62;
    if (target <= marks[0].y) return 0;
    for (let i = 1; i < marks.length; i++) {
      const a = marks[i - 1], b = marks[i];
      if (target <= b.y) {
        const t = b.y === a.y ? 1 : (target - a.y) / (b.y - a.y);
        return a.len + (b.len - a.len) * t;
      }
    }
    return total;
  }

  // Where the line should be: scroll position, intro, or the very end once the last button is on screen.
  function targetLen() {
    if (reduce) return total;
    // at the very top the intro owns the line (logo → stations); scrolling takes over from there.
    // Without this, a tall screen already "scrolls" past the first stations and the line starts mid-row.
    let t = Math.max(introLen * ease(intro), scrollY < 4 ? 0 : scrollLen());
    const r = ctaBtn.getBoundingClientRect();
    const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 4;
    if ((r.top >= 0 && r.bottom <= innerHeight) || atBottom) t = total;
    return Math.min(total, t);
  }
  let shown = -1, raf = 0;
  function render(len) {
    line.style.strokeDashoffset = total - len;
    const p = line.getPointAtLength(len);
    tip.setAttribute('cx', p.x); tip.setAttribute('cy', p.y);
    tip.style.opacity = len < 2 || len >= total - 1 ? 0 : 1;
    litEls.forEach((el, i) => el.classList.toggle('is-lit', litLens[i] < 0 || len >= litLens[i] - 1));
    halo.setAttribute('cx', p.x); halo.setAttribute('cy', p.y); halo.style.display = tip.style.opacity === '0' ? 'none' : '';
    ctaBtn.classList.toggle('is-reached', len >= total - 1);
  }
  // The line eases toward its target, so jumps (menu links, the end button) animate instead of snapping.
  function draw() {
    if (!total) return;
    if (shown < 0) { shown = targetLen(); render(shown); }
    if (raf) return;
    let last = performance.now();
    const step = now => {
      const t = targetLen(), d = t - shown, dt = Math.min(250, now - last); last = now;
      if (Math.abs(d) < 0.6) { shown = t; render(shown); raf = 0; return; }
      // time-based easing: ~90% of the way in 250ms (big jumps) or 120ms (normal scrolling)
      const tau = Math.abs(d) > innerHeight ? 110 : 50;
      shown += d * (1 - Math.exp(-dt / tau));
      render(shown);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }
  const ease = t => 1 - Math.pow(1 - t, 3);

  // intro: draw logo → five stations on load
  function playIntro() {
    if (reduce) return;
    const t0 = performance.now() + 250, dur = 1600;
    let n = 0;
    const step = now => {
      // fonts and images can still shift the hero while the intro runs: keep the line on its stations
      if (++n % 8 === 0 && layoutMoved()) build();
      intro = Math.min(1, Math.max(0, (now - t0) / dur)); draw(); if (intro < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Pull your thread: interactive growth map ---------- */
  const ROUTES = {
    store:    { nodes: ['brand', 'platform', 'store', 'live'], client: 'Royal Moroccan Football Federation',
                title: 'Platform, official store and fan moments, run as one programme.', kpi: '<b>10B</b> impressions a year',
                img: 'assets/img/frmf-store-banner.jpg', alt: 'FRMF official store campaign' },
    stadium:  { nodes: ['platform', 'media', 'sponsor', 'live'], client: 'Basketball Africa League · NBA × FIBA',
                title: 'A new tournament, sold out in Morocco.', kpi: '<b>91%</b> sell-through in 12 weeks',
                img: 'assets/img/bal-team.jpg', alt: 'Basketball Africa League players' },
    sponsors: { nodes: ['brand', 'sponsor', 'media', 'live'], client: 'Haier Europe × Morocco national team',
                title: 'A brand new to football, activated at the top level.', kpi: 'Content · PR · OOH · app',
                img: 'assets/img/haier-app.jpg', alt: 'Haier x Morocco: Play with the number ones' },
    brand:    { nodes: ['brand', 'live', 'media', 'platform'], client: 'CAF · AFCON 2025',
                title: 'The official logo reveal film, from casting to soundtrack.', kpi: '<b>2</b> weeks, brief to launch',
                img: 'assets/img/caf-trophy.jpg', alt: 'AFCON 2025 logo craft' },
    online:   { nodes: ['platform', 'media', 'store'], client: 'duPont Registry',
                title: 'The luxury car marketplace, rebuilt and put in front of buyers.', kpi: 'Platform · growth marketing',
                img: 'assets/img/dupont-site.jpg', alt: 'duPont Registry website' },
    venue:    { nodes: ['brand', 'media', 'sponsor', 'store', 'live'], client: 'Rabat Live Arena',
                title: "Morocco's biggest stage: the match, the music, the roar.", kpi: 'Brand · campaign · ticketing · live',
                img: 'assets/img/rla-stage.jpg', alt: 'Rabat Live Arena concert' },
  };
  const UNIT = { brand: 'Digital', platform: 'Digital', media: 'Digital', sponsor: 'Sports', store: 'Retail', live: 'Experiences' };
  const pullSec = document.querySelector('.pull');
  const map = pullSec.querySelector('.pull__map');
  const route = map.querySelector('.pull__route');
  const nodeEls = Object.fromEntries([...map.querySelectorAll('.node')].map(n => [n.dataset.node, n]));
  // Node positions: landscape on desktop, portrait on phones so labels stay readable.
  const LAYOUT = {
    wide: { vb: '0 0 650 400', pos: { brand: [90, 92], platform: [320, 62], media: [560, 104], sponsor: [120, 300], store: [340, 322], live: [560, 290] } },
    tall: { vb: '0 0 400 470', pos: { brand: [80, 60], platform: [300, 90], media: [110, 210], sponsor: [300, 240], store: [90, 380], live: [300, 390] } },
  };
  let P = {};
  const mesh = map.querySelector('.pull__mesh');
  function layoutMap() {
    const L = matchMedia('(max-width: 860px)').matches ? LAYOUT.tall : LAYOUT.wide;
    map.setAttribute('viewBox', L.vb);
    P = L.pos;
    Object.entries(nodeEls).forEach(([k, n]) => n.setAttribute('transform', `translate(${P[k][0]} ${P[k][1]})`));
    // faint mesh: every unit is connected to every other one
    mesh.innerHTML = '';
    const keys = Object.keys(P);
    keys.forEach((a, i) => keys.slice(i + 1).forEach(b => {
      const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', P[a][0]); l.setAttribute('y1', P[a][1]); l.setAttribute('x2', P[b][0]); l.setAttribute('y2', P[b][1]);
      mesh.appendChild(l);
    }));
  }
  layoutMap();
  // smooth curve through points (Catmull-Rom → Bézier)
  function curve(pts) {
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      d += ` C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]} ${p2[1]}`;
    }
    return d;
  }
  const label = { brand: 'Brand', platform: 'Platform', media: 'Media', sponsor: 'Sponsorship', store: 'Store', live: 'Live & content' };
  const opts = [...pullSec.querySelectorAll('.pull__opt')];
  const proof = pullSec.querySelector('.pull__proof');
  const pullCta = pullSec.querySelector('.pull__cta');
  let hitTimers = [];
  function pick(key, animate = true) {
    const r = ROUTES[key];
    opts.forEach(o => { const on = o.dataset.route === key; o.classList.toggle('is-on', on); o.setAttribute('aria-pressed', on); });
    Object.values(nodeEls).forEach(n => { n.classList.remove('is-on', 'is-hit'); n.querySelector('.node__n').textContent = ''; });
    hitTimers.forEach(clearTimeout); hitTimers = [];
    route.setAttribute('d', curve(r.nodes.map(k => P[k])));
    const len = route.getTotalLength(), dur = reduce || !animate ? 0 : 1100;
    route.style.transition = 'none'; route.style.strokeDasharray = len; route.style.strokeDashoffset = dur ? len : 0;
    route.getBoundingClientRect();
    if (dur) { route.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(.6,.05,.2,1)`; route.style.strokeDashoffset = 0; }
    // light each node as the line reaches it
    let acc = 0; const probe = document.createElementNS('http://www.w3.org/2000/svg', 'path'); map.appendChild(probe);
    r.nodes.forEach((k, i) => {
      if (i) { probe.setAttribute('d', curve(r.nodes.slice(0, i + 1).map(n => P[n]))); acc = probe.getTotalLength(); }
      const t = dur ? (acc / len) * dur : 0;
      hitTimers.push(setTimeout(() => { const n = nodeEls[k]; n.classList.add('is-on', 'is-hit'); n.querySelector('.node__n').textContent = i + 1; }, t));
    });
    probe.remove();
    pullSec.querySelector('.pull__path').textContent = r.nodes.map(k => T(label[k])).join(document.documentElement.dir === 'rtl' ? ' ← ' : ' → ');
    const units = new Set(r.nodes.map(k => UNIT[k])).size;
    pullSec.querySelector('.pull__units').textContent = T(units === 1 ? '1 business unit' : `${units} business units`);
    proof.classList.add('is-swap');
    setTimeout(() => {
      const img = proof.querySelector('img'); img.removeAttribute('srcset'); img.removeAttribute('sizes'); img.src = pic(r.img); img.alt = T(r.alt);
      proof.querySelector('.pull__client').textContent = T('Proof · ') + T(r.client);
      proof.querySelector('.pull__title').textContent = T(r.title);
      proof.querySelector('.pull__kpi').innerHTML = T(r.kpi);
      proof.classList.remove('is-swap');
    }, dur ? 250 : 0);
    const thread = r.nodes.map(k => label[k]).join(' > ');
    pullCta.href = `mailto:hello@webloo.com?subject=${encodeURIComponent('Start a project: ' + opts.find(o => o.dataset.route === key).textContent.replace(/^\d+/, '').trim())}&body=${encodeURIComponent('Our thread: ' + thread + '\n\nAbout the project:\n')}`;
  }
  opts.forEach(o => o.addEventListener('click', () => pick(o.dataset.route)));
  pick('store', false);
  addEventListener('langchange', () => { const on = opts.find(o => o.classList.contains('is-on')); pick(on ? on.dataset.route : 'store', false); });
  matchMedia('(max-width: 860px)').addEventListener('change', () => { layoutMap(); pick(opts.find(o => o.classList.contains('is-on')).dataset.route, false); });
  // draw the default route the first time the map comes into view
  new IntersectionObserver(([e], ob) => { if (e.isIntersecting) { pick(opts.find(o => o.classList.contains('is-on')).dataset.route); ob.disconnect(); } }, { threshold: 0.4 }).observe(map);

  /* ---------- The hand-off game ---------- */
  const relay = document.querySelector('.relay');
  if (relay) {
    const BRIEF = relay.querySelector('.relay__brief p').textContent.trim();
    const rows = [...relay.querySelectorAll('.relay__row')];
    const modes = [...document.querySelectorAll('.relay__mode')];
    const result = relay.querySelector('.relay__result'), resultV = relay.querySelector('.relay__result-v');
    let run = 0, playedUsual = false;
    const wait = ms => new Promise(r => setTimeout(r, ms));
    async function type(el, text, speed, id) {
      el.style.minHeight = ''; el.textContent = text; el.style.minHeight = el.offsetHeight + 'px'; // reserve the final height so nothing below jumps
      el.textContent = ''; el.classList.add('is-typing');
      for (let i = 1; i <= text.length; i++) { if (id !== run) return; el.textContent = text.slice(0, i); await wait(speed); }
      el.classList.remove('is-typing');
    }
    // Show a mode instantly, fully written out (reduced motion, or after a language change).
    function settle(mode) {
      run++;
      relay.dataset.mode = mode; relay.classList.remove('relay--armed');
      modes.forEach(b => { const on = b.dataset.mode === mode; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); b.classList.remove('is-hint'); });
      rows.forEach(r => {
        const m = r.querySelector('.relay__msg');
        m.style.minHeight = ''; m.classList.remove('is-typing');
        r.classList.add('is-in', 'is-done');
        r.querySelector('.relay__who').textContent = T(mode === 'usual' ? r.dataset.whoU : r.dataset.whoW);
        m.textContent = T(mode === 'usual' ? r.dataset.usual : r.dataset.webloo);
      });
      resultV.textContent = T(resultV.dataset[mode]); result.classList.add('is-in');
      relay.querySelector('.relay__again').firstChild.textContent = T(mode === 'usual' ? 'Now run it with Webloo' : 'Replay the usual way') + ' ';
    }
    addEventListener('langchange', () => settle(relay.dataset.mode || 'usual'));
    async function play(mode) {
      const id = ++run;
      relay.dataset.mode = mode;
      modes.forEach(b => { const on = b.dataset.mode === mode; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); b.classList.remove('is-hint'); });
      if (reduce) { settle(mode); return; }
      relay.classList.add('relay--armed');
      rows.forEach(r => { r.classList.remove('is-in', 'is-done');
        // every row switches to the chosen story at once, including the faded ones not reached yet
        r.querySelector('.relay__who').textContent = T(mode === 'usual' ? r.dataset.whoU : (r.dataset.whoW || r.dataset.whoU));
        const m = r.querySelector('.relay__msg'); m.style.minHeight = ''; m.textContent = T(mode === 'usual' ? r.dataset.usual : r.dataset.webloo); m.style.minHeight = m.offsetHeight + 'px'; m.textContent = ''; });
      result.classList.remove('is-in');
      resultV.textContent = T(resultV.dataset[mode]);
      await wait(250);
      for (const r of rows) {
        if (id !== run) return;
        if (mode === 'webloo' && !r.dataset.webloo) continue;
        r.querySelector('.relay__who').textContent = T(mode === 'usual' ? r.dataset.whoU : r.dataset.whoW);
        r.classList.add('is-in');
        await type(r.querySelector('.relay__msg'), T(mode === 'usual' ? r.dataset.usual : r.dataset.webloo), mode === 'usual' ? 26 : 14, id);
        if (id !== run) return;
        r.classList.add('is-done');
        await wait(mode === 'usual' ? 380 : 160);
      }
      resultV.textContent = T(resultV.dataset[mode]);
      relay.querySelector('.relay__again').firstChild.textContent = T(mode === 'usual' ? 'Now run it with Webloo' : 'Replay the usual way') + ' ';
      result.classList.add('is-in');
      if (mode === 'usual' && !playedUsual) { playedUsual = true; await wait(700); if (id === run) modes.find(b => b.dataset.mode === 'webloo').classList.add('is-hint'); }
    }
    modes.forEach(b => b.addEventListener('click', () => play(b.dataset.mode)));
    const again = relay.querySelector('.relay__again');
    again.addEventListener('click', () => play(relay.dataset.mode === 'usual' ? 'webloo' : 'usual'));
    new IntersectionObserver(([e], ob) => { if (e.isIntersecting) { ob.disconnect(); play('usual'); } }, { threshold: 0.35 }).observe(relay);
  }

  /* ---------- misc ---------- */
  const nav = document.querySelector('.nav');
  const darkSecs = [...document.querySelectorAll('.hero, .pull, .eco, .loop, .quote, .foot')];
  const mcta = document.querySelector('.mcta');
  const hero = document.querySelector('.hero');
  const cta = document.querySelector('.cta');
  // header shows where you are: the link of the section under the top third of the screen
  const spy = [...document.querySelectorAll('.nav__links a, .menu nav a')].map(a => [a, document.querySelector(a.getAttribute('href'))]).filter(x => x[1]);
  function spyNav() {
    const line = innerHeight * 0.35;
    const cur = spy.find(([, sec]) => { const r = sec.getBoundingClientRect(); return r.top <= line && r.bottom > line; });
    spy.forEach(([a, sec]) => {
      const on = !!cur && cur[1] === sec;
      a.classList.toggle('is-active', on);
      on ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current');
    });
  }
  function chrome() {
    spyNav();
    nav.classList.toggle('is-scrolled', scrollY > 20);
    nav.classList.toggle('on-dark', darkSecs.some(sec => { const r = sec.getBoundingClientRect(); return r.top < 36 && r.bottom > 36; }));
    const pastHero = hero.getBoundingClientRect().bottom < innerHeight * 0.3;
    const atCta = cta.getBoundingClientRect().top < innerHeight;
    const pr = document.querySelector('.pull__cta').getBoundingClientRect();
    const pullCtaVisible = pr.top < innerHeight && pr.bottom > 0;
    mcta.classList.toggle('is-on', pastHero && !atCta && !pullCtaVisible);
  }

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.count;
    if (reduce) return;
    const t0 = performance.now(), dur = 1400;
    const tick = now => { const t = Math.min(1, (now - t0) / dur); el.textContent = Math.round(to * ease(t)); if (t < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  function clocks() {
    document.querySelectorAll('time[data-tz]').forEach(t => {
      t.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: t.dataset.tz }).format(new Date());
    });
  }
  clocks(); setInterval(clocks, 15000);

  /* ---------- work-card video: hover on desktop, in-view on touch ---------- */
  document.querySelectorAll('.card--video').forEach(card => {
    const v = card.querySelector('video');
    const play = () => { if (reduce) return; if (!v.src) v.src = v.dataset.src;   /* data-src is rewritten by the build for /fr/ and /ar/ */ v.play().then(() => card.classList.add('is-playing')).catch(() => {}); };
    const stop = () => { v.pause(); card.classList.remove('is-playing'); };
    if (matchMedia('(hover: hover)').matches) {
      card.addEventListener('mouseenter', play); card.addEventListener('mouseleave', stop);
      card.addEventListener('focus', play); card.addEventListener('blur', stop);
    } else {
      new IntersectionObserver(([e]) => e.isIntersecting ? play() : stop(), { threshold: 0.6 }).observe(card);
    }
  });

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      // layout changed since the last build (late images, fonts, jump links): rebuild first
      if (layoutMoved()) build();
      chrome(); draw(); ticking = false;   // reads first, then writes
    });
  }, { passive: true });

  let rz;
  // rebuild only when something actually moved (images, fonts and resizes fire often while loading)
  const footBottom = () => Math.ceil(document.querySelector('.foot').getBoundingClientRect().bottom + scrollY);
  const rebuild = () => { clearTimeout(rz); rz = setTimeout(() => { if (layoutMoved() || footBottom() !== lastDocH) build(); }, 120); };
  addEventListener('resize', rebuild);
  new ResizeObserver(rebuild).observe(document.body);
  document.querySelectorAll('img').forEach(im => { if (!im.complete) im.addEventListener('load', rebuild, { once: true }); });
  addEventListener('hashchange', rebuild);


  /* ---------- phone menu ---------- */
  const menuBtn = document.querySelector('.nav__menu'), menu = document.getElementById('menu');
  function setMenu(open) {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.toggle('is-open', open));
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', T(open ? 'Close menu' : 'Menu'));
    document.documentElement.classList.toggle('menu-lock', open);
    if (!open) setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 400);
    else menu.querySelector('a').focus({ preventScroll: true });
  }
  menuBtn && menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu && menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

  /* ---------- units filter the work ---------- */
  const grid = document.querySelector('.work__grid'), cards = [...grid.querySelectorAll('.card')];
  const bar = document.querySelector('.work__filter');
  const chipsOf = el => [...el.querySelectorAll('.chips li')].map(l => l.textContent.trim());
  let unitFilter = '';
  // filter by a unit (its chip on the card) or by an industry (data-industry on the card)
  function filterWork(unit, label, test) {
    unitFilter = unit;
    const match = test || (c => chipsOf(c).includes(unit));
    grid.classList.toggle('is-filtered', !!unit);
    cards.forEach(c => c.classList.toggle('is-match', !!unit && match(c)));
    bar.hidden = !unit; bar.querySelector('b').textContent = label || unit;
  }
  // industries: show their work, or open a brief when the work is not on this page yet
  document.querySelectorAll('.ind[data-ind]').forEach(tile => {
    const go = e => {
      const k = tile.dataset.ind, name = tile.querySelector('h3').textContent;
      if (cards.some(c => c.dataset.industry === k)) {
        filterWork(k, name, c => c.dataset.industry === k);
        document.getElementById('work').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      } else if (window.WebChat) WebChat.open('brief', e);
    };
    tile.addEventListener('click', go);
    tile.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(e); } });
  });
  // engagement models: each one explains itself
  const say = document.querySelector('.how__say');
  document.querySelectorAll('.how__chip').forEach(chip => {
    const show = () => { document.querySelectorAll('.how__chip').forEach(x => x.classList.toggle('is-on', x === chip)); say.textContent = T(chip.dataset.say); };
    chip.addEventListener('click', show); chip.addEventListener('mouseenter', show); chip.addEventListener('focus', show);
  });
  const hookUnits = () => {
  document.querySelectorAll('.unit[data-unit]').forEach(u => u.addEventListener('click', e => {
    const unit = u.dataset.unit;
    if (cards.some(c => chipsOf(c).includes(unit))) return filterWork(unit);
    // no card for this unit in the grid (e.g. Retail): show its projects from the hero stations instead
    const list = stations.filter(st => chipsOf(st.dataset.case ? document.getElementById(st.dataset.case) : st).includes(unit));
    if (list.length) { e.preventDefault(); openPeek(list, list[0]); }
  }));
  };
  bar.querySelector('button').addEventListener('click', () => filterWork(''));

  /* ---------- project pop-ups: stations and work cards ---------- */
  const box = document.querySelector('.peekbox');
  const media = box.querySelector('.peekbox__media');
  let group = [], gi = 0, lastFocus = null;
  function dataOf(el) {
    // a station points to a work card, or carries its own short story (.peek)
    const card = el.dataset.case && document.getElementById(el.dataset.case);
    const src = card || el.querySelector('.peek') || el;
    const q = sel => src.querySelector(sel);
    return {
      img: (card || el).querySelector('img'),
      client: (q('.card__client') || q('.peek__k') || {}).textContent || '',
      title: (q('h3') || q('.peek__t') || {}).textContent || '',
      did: (q('.card__did') || q('.peek p') || {}).textContent || '',
      kpi: (q('.card__kpi') || {}).innerHTML || '',
      chips: chipsOf(src),
    };
  }
  function show(i) {
    gi = (i + group.length) % group.length;
    const d = dataOf(group[gi]);
    media.innerHTML = '';
    if (d.img) {
      // whole picture in front (never cropped), a blurred copy behind fills the frame
      const im = d.img.cloneNode(); im.loading = 'eager'; im.removeAttribute('style'); im.className = 'peekbox__img';
      if (im.srcset) im.sizes = '(max-width: 860px) 100vw, 56vw';
      const bg = im.cloneNode(); bg.className = 'peekbox__bg'; bg.alt = ''; bg.setAttribute('aria-hidden', 'true');
      if (bg.srcset) bg.sizes = '400px';
      media.append(bg, im);
    }
    box.querySelector('.peekbox__k').textContent = d.client;
    box.querySelector('.peekbox__title').textContent = d.title;
    box.querySelector('.peekbox__did').textContent = d.did;
    const k = box.querySelector('.peekbox__kpi'); k.innerHTML = d.kpi; k.hidden = !d.kpi;
    box.querySelector('.peekbox__chips').innerHTML = d.chips.map(c => `<li>${c}</li>`).join('');
    box.querySelector('.peekbox__count').textContent = `${String(gi + 1).padStart(2, '0')} / ${String(group.length).padStart(2, '0')}`;
    box.querySelector('.peekbox__panel').classList.remove('is-swap'); void box.offsetWidth;
    box.querySelector('.peekbox__panel').classList.add('is-swap');
  }
  function openPeek(list, el) {
    lastFocus = document.activeElement;
    group = list; box.hidden = false;
    document.documentElement.classList.add('peek-lock');
    show(list.indexOf(el));
    requestAnimationFrame(() => box.classList.add('is-open'));
    box.querySelector('.peekbox__close').focus({ preventScroll: true });
  }
  function closePeek() {
    if (box.hidden) return;
    box.classList.remove('is-open');
    document.documentElement.classList.remove('peek-lock');
    setTimeout(() => { if (!box.classList.contains('is-open')) box.hidden = true; }, reduce ? 0 : 350);
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
  }
  window.WebPeek = { close: closePeek };
  hookUnits();
  // footer shortcuts: a unit filters the work (like its card), a project opens its pop-up
  document.querySelectorAll('[data-unit-link]').forEach(a => a.addEventListener('click', e => {
    const unit = document.querySelector(`.unit[data-unit="${a.dataset.unitLink}"]`);
    if (unit) { e.preventDefault(); unit.click(); if (!document.documentElement.classList.contains('peek-lock')) document.getElementById('work').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }
  }));
  document.querySelectorAll('[data-open]').forEach(a => a.addEventListener('click', e => {
    const el = document.querySelector(a.dataset.open);
    if (el) { e.preventDefault(); el.click(); }
  }));
  const openable = (el, list) => {
    el.tabIndex = 0; el.setAttribute('role', 'button');
    el.setAttribute('aria-haspopup', 'dialog');
    el.setAttribute('aria-label', T('Open project: {title}', { title: dataOf(el).title }));
    const go = () => openPeek(list(), el);
    el.addEventListener('click', e => { if (!e.target.closest('a')) go(); });
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  };
  stations.forEach(st => openable(st, () => stations));
  cards.forEach(c => openable(c, () => unitFilter ? cards.filter(x => x.classList.contains('is-match')) : cards));
  box.querySelector('.peekbox__close').addEventListener('click', closePeek);
  box.querySelector('.peekbox__prev').addEventListener('click', () => show(gi - 1));
  box.querySelector('.peekbox__next').addEventListener('click', () => show(gi + 1));
  box.addEventListener('click', e => { if (e.target === box) closePeek(); });
  addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePeek(); if (menu && menu.classList.contains('is-open')) setMenu(false); }
    if (box.hidden) return;
    const back = document.documentElement.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') show(gi + (e.key === back ? -1 : 1));
    if (e.key === 'Tab') {   // keep focus inside the pop-up
      const f = [...box.querySelectorAll('a, button')], first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // swipe between projects on phones
  let sx = null;
  box.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) show(gi + ((dx < 0) !== (document.documentElement.dir === 'rtl') ? 1 : -1));
  });

  build(); chrome(); playIntro();
  if (document.fonts) { document.fonts.ready.then(rebuild); document.fonts.addEventListener('loadingdone', rebuild); }
  addEventListener('load', rebuild);
})();

;
/* Webloo assistant: "Talk to Webloo" (help) and "Start a project" (brief builder).
   One overlay, two entry points. Scripted for the prototype: no server, no AI calls.
   The brief is sent through the visitor's own email app (mailto). */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = (s, v) => (window.WebI18n ? WebI18n.t(s, v) : s);   // translate text this script creates
  const rtl = () => document.documentElement.dir === 'rtl';
  const touch = matchMedia('(hover: none)').matches;
  const EMAIL = 'hello@webloo.com';
  const MEETING = 'https://meetings.hubspot.com/mehdi-naourass/webloo?embed=true';   // the same scheduler as webloo.com/contact
  const PRIVACY = 'https://webloo.com/privacy-policy/';
  const PHONE = '+1 (949) 392-5241';

  // The Webloo mark (the "oo" loop from the logo), used for the launcher and as the assistant's face.
  const MARK = 'M95.9168 12.536C95.6076 12.3021 95.3461 12.1033 95.0845 11.9045C93.2653 10.4896 90.6614 10.2674 88.652 11.3549C86.5713 12.4775 85.3229 14.7578 85.5488 16.9914C86.0244 21.5988 91.1846 23.844 95.0726 21.131C96.2497 20.3007 97.1533 19.1664 97.6884 17.845C98.3066 16.395 98.9249 14.9332 99.5313 13.4598C101.006 9.88148 103.538 7.47254 107.426 6.54873C113.062 5.21563 118.924 9.03953 119.851 14.6643C120.838 20.6632 116.843 25.9255 110.684 26.6271C107.664 26.9779 105.06 25.984 102.777 23.9726L105.108 20.3826C105.381 20.558 105.631 20.71 105.857 20.8854C107.664 22.3238 109.685 22.7448 111.861 21.8911C114.037 21.0374 115.178 19.3769 115.571 17.1317C116.177 13.6469 112.919 10.6299 109.911 10.6182C107.842 10.6065 106.106 11.4602 104.787 13.0505C103.776 14.2667 103.241 15.7284 102.635 17.1551C102.123 18.3595 101.66 19.5874 101.053 20.7334C98.8892 24.838 95.3817 26.7674 90.7328 26.6388C86.2741 26.5102 82.172 22.8851 81.3516 18.4882C80.3053 12.9336 83.6821 7.78828 89.2346 6.53703C92.4806 5.81201 95.3936 6.53703 97.9618 8.61854C98.0807 8.7121 98.1996 9.00444 98.1402 9.09799C97.4268 10.244 96.6896 11.3549 95.9168 12.536Z';
  const markSvg = cls => `<svg class="${cls}" viewBox="79.6 -4.5 42 42" aria-hidden="true"><path d="${MARK}"/></svg>`;

  const GOALS = {
    store:    { label: 'Open an official store', units: ['Digital', 'Retail', 'Experiences'] },
    stadium:  { label: 'Fill a stadium',         units: ['Digital', 'Sports', 'Experiences'] },
    sponsors: { label: 'Win sponsors',           units: ['Digital', 'Sports', 'Experiences'] },
    brand:    { label: 'Launch a brand',         units: ['Digital', 'Experiences'] },
    online:   { label: 'Grow online',            units: ['Digital', 'Retail'] },
    loop:     { label: 'See Webloo Loop in action', units: ['Digital'] },
    venue:    { label: 'Launch a live venue',    units: ['Digital', 'Sports', 'Retail', 'Experiences'] },
  };
  const WHERE = {
    'Morocco & Africa': ['Rabat'], 'Middle East': ['Rabat'], 'Europe': ['Skopje', 'Rabat'],
    'North America': ['Newport Beach', 'Miami'], 'Global': ['Newport Beach', 'Miami', 'Rabat', 'Skopje'],
  };
  // Most specific topics first; the general "what is Webloo" answer comes last.
  const FAQ = [
    { k: /where|office|based|location|cit(y|ies)|europe|america|africa|morocco|miami|rabat|skopje|newport|où|bureau|basé|maroc|afrique|أين|مكتب|مكاتب|مقر|المغرب|أوروبا/i, a: 'We are 250+ people in <b>Newport Beach</b> and <b>Miami</b> (USA), <b>Rabat</b> (Morocco) and <b>Skopje</b> (North Macedonia).' },
    { k: /client|worked|work with|portfolio|case|proof|example|référence|travaillé|عملاء|عملتم|عملت|زبائن/i, a: 'FRMF, CAF, the Basketball Africa League, Haier Europe, Rabat Live Arena, Wydad AC, Miami Concours, duPont Registry, Retromobile and Catalyst Health Group, among others.' },
    { k: /job|career|hiring|join|cv|intern|emploi|carrière|recrut|stage|وظيف|توظيف|عمل معكم|تدريب/i, a: `We are always glad to meet good people. Send your CV and portfolio to <a href="mailto:${EMAIL}?subject=Careers">${EMAIL}</a>.` },
    { k: /price|cost|budget|fee|how much|rate|prix|coût|tarif|combien|سعر|تكلفة|ميزانية|كم/i, a: 'It depends on the outcome and the units involved. We work by scope, by time and materials, or as a partner sharing the result. The fastest way to a number is a 60-second brief.' },
    { k: /what (do|is|are)|units?|services?|offer|ecosystem|agency|digital|sports|retail|experiences|que fait|qu'est|faites|unité|écosystème|agence|ماذا|ما هي|خدمات|وحدات|منظومة|وكالة/i, a: 'Webloo is a growth ecosystem, not an agency. Four business units work as one team: <b>Digital</b> (brand, platforms, media), <b>Sports</b> (sponsorship, rights, fans), <b>Retail</b> (official stores, merchandise) and <b>Experiences</b> (content, live events, fan zones).' },
  ];

  /* ---------- markup ---------- */
  const fab = document.createElement('button');
  fab.className = 'wa-fab'; fab.type = 'button'; fab.setAttribute('aria-label', 'Talk to Webloo');
  fab.innerHTML = `<span class="wa-fab__icon">${markSvg('wa-mark')}<i class="wa-fab__live"></i></span><span class="wa-fab__txt"><span class="wa-fab__msg">${T('Ask Webloo anything')}</span></span><span class="wa-fab__hint mono">Pull ↑</span>`;
  document.body.appendChild(fab);

  const ov = document.createElement('div');
  ov.className = 'wa'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Webloo assistant'); ov.hidden = true;
  ov.innerHTML = `
    <div class="wa__chat">
      <header class="wa__head">
        <span class="wa__avatar">${markSvg('wa-mark')}<i></i></span>
        <div><b>Webloo</b><span class="wa__status"><i></i><span data-en="Usually replies within one business day">Usually replies within one business day</span></span></div>
        <button type="button" class="wa__close" aria-label="Close">✕</button>
      </header>
      <div class="wa__log" aria-live="polite"></div>
      <div class="wa__dock">
        <div class="wa__chips"></div>
        <form class="wa__form" autocomplete="on" novalidate>
          <input class="wa__input" type="text" placeholder="Type a message…" aria-label="Message">
          <button class="wa__send" type="submit" aria-label="Send">→</button>
        </form>
      </div>
    </div>
    <aside class="wa__thread" aria-label="Your thread">
      <p class="mono wa__thread-k" data-en="Your thread">Your thread</p>
      <h2 class="wa__thread-title" data-en="Every answer adds to it.">Every answer adds to it.</h2>
      <ol class="wa__steps">
        ${['Goal', 'For', 'Where', 'When', 'Budget', 'You'].map(s => `<li data-step="${s}"><span class="mono" data-en="${s}">${s}</span><p>…</p></li>`).join('')}
      </ol>
      <div class="wa__group"><p class="mono" data-en="Business units">Business units</p><div class="wa__pills" data-pills="units">${['Digital', 'Sports', 'Retail', 'Experiences'].map(u => `<span data-en="${u}">${u}</span>`).join('')}</div></div>
      <div class="wa__group"><p class="mono" data-en="Your team, from">Your team, from</p><div class="wa__pills" data-pills="offices">${['Newport Beach', 'Miami', 'Rabat', 'Skopje'].map(u => `<span data-en="${u}">${u}</span>`).join('')}</div></div>
      <div class="wa__group wa__callbox" hidden><p class="mono" data-en="Intro call">Intro call</p><p class="wa__call"></p></div>
      <p class="wa__zero mono"><span data-en="1 team · ">1 team · </span><em data-en="0 hand-offs">0 hand-offs</em></p>
    </aside>`;
  document.body.appendChild(ov);

  // Re-label the fixed parts of the assistant in the current language.
  function translateShell() {
    ov.querySelectorAll('[data-en]').forEach(el => { el.textContent = T(el.dataset.en); });
    ov.setAttribute('aria-label', T('Webloo assistant'));
    ov.querySelector('.wa__close').setAttribute('aria-label', T('Close'));
    ov.querySelector('.wa__input').setAttribute('aria-label', T('Message'));
    ov.querySelector('.wa__input').placeholder = T('Type a message…');
    ov.querySelector('.wa__send').setAttribute('aria-label', T('Send'));
    ov.querySelector('.wa__thread').setAttribute('aria-label', T('Your thread'));
    fab.querySelector('.wa-fab__hint').textContent = T('Pull ↑');
  }
  translateShell();

  const log = ov.querySelector('.wa__log'), chips = ov.querySelector('.wa__chips');
  const form = ov.querySelector('.wa__form'), input = ov.querySelector('.wa__input');
  const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
  let session = 0, onText = null, lastFocus = null, call = null, sent = false, nudged = false;
  const brief = {};

  /* ---------- open / close with a circle reveal from the click point ---------- */
  function open(mode, evt, preset) {
    lastFocus = document.activeElement;
    const x = evt && evt.clientX ? evt.clientX : innerWidth - 50, y = evt && evt.clientY ? evt.clientY : innerHeight - 50;
    ov.style.setProperty('--ox', x + 'px'); ov.style.setProperty('--oy', y + 'px');
    ov.hidden = false; ov.classList.toggle('is-brief', mode === 'brief'); fitViewport();
    document.documentElement.classList.add('wa-lock');
    requestAnimationFrame(() => ov.classList.add('is-open'));
    reset();
    (mode === 'brief' ? runBrief(preset) : runHelp());
    if (!touch) setTimeout(() => input.focus({ preventScroll: true }), reduce ? 0 : 500);
  }
  function close() {
    if (call && !sent && !nudged && !ov.hidden) { nudged = true; remind(); return; }
    session++;
    ov.classList.remove('is-open');
    document.documentElement.classList.remove('wa-lock');
    setTimeout(() => { ov.hidden = true; }, reduce ? 0 : 500);
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
  }
  ov.querySelector('.wa__close').addEventListener('click', close);
  window.WebChat = { open };
  const vv = window.visualViewport;
  function fitViewport() {
    if (!vv || ov.hidden) return;
    ov.style.setProperty('--vvh', vv.height + 'px');
    ov.style.setProperty('--vvt', vv.offsetTop + 'px');
    ov.classList.toggle('is-kb', vv.height < screen.height * 0.6);   // keyboard is up: give the room to the chat
    log.scrollTop = log.scrollHeight;
  }
  if (vv) { vv.addEventListener('resize', fitViewport); vv.addEventListener('scroll', fitViewport); }
  input.addEventListener('focus', () => setTimeout(fitViewport, 300));
  addEventListener('keydown', e => { if (e.key === 'Escape' && !ov.hidden) close(); });

  function reset() {
    session++; log.innerHTML = ''; chips.innerHTML = ''; onText = null;
    Object.keys(brief).forEach(k => delete brief[k]);
    ov.querySelectorAll('.wa__steps li').forEach(li => { li.classList.remove('is-set'); li.querySelector('p').textContent = '…'; });
    ov.querySelectorAll('.wa__pills span').forEach(s => s.classList.remove('is-on'));
    ov.classList.remove('is-done');
    call = null; sent = false; nudged = false;
    ov.querySelector('.wa__callbox').hidden = true;
  }

  /* ---------- conversation helpers ---------- */
  async function say(html, delay = 650) {
    const id = session;
    const row = document.createElement('div'); row.className = 'wa-row wa-row--bot';
    const prev = log.lastElementChild;
    if (prev && prev.classList.contains('wa-row--bot')) prev.classList.add('is-cont');   // avatar only on the last of a group
    row.innerHTML = `<span class="wa-row__av">${markSvg('wa-mark')}</span><div class="wa-msg wa-msg--bot wa-msg--typing"><i></i><i></i><i></i></div>`;
    log.appendChild(row); scroll();
    await wait(delay);
    if (id !== session) return false;
    const msg = row.querySelector('.wa-msg');
    msg.classList.remove('wa-msg--typing'); msg.innerHTML = html; scroll();
    return true;
  }
  function me(text) {
    log.querySelectorAll('.wa-seen').forEach(x => x.remove());
    const row = document.createElement('div'); row.className = 'wa-row wa-row--me';
    const m = document.createElement('div'); m.className = 'wa-msg wa-msg--me'; m.textContent = text;
    const seen = document.createElement('span'); seen.className = 'wa-seen mono'; seen.textContent = T('Seen');
    row.append(m, seen); log.appendChild(row); scroll();
  }
  let stick = true;   // follow new messages unless the visitor scrolled up to read
  log.addEventListener('scroll', () => { stick = log.scrollHeight - log.scrollTop - log.clientHeight < 80; }, { passive: true });
  const toEnd = () => { log.scrollTop = log.scrollHeight; };
  function scroll() { stick = true; requestAnimationFrame(() => { toEnd(); setTimeout(toEnd, 380); }); }
  new ResizeObserver(() => { if (stick) toEnd(); }).observe(log);
  new MutationObserver(() => { if (stick) requestAnimationFrame(toEnd); }).observe(log, { childList: true, subtree: true, characterData: true });
  function ask(options, { free = T('Type your answer…'), type = 'text', auto = 'off', check = null } = {}) {
    return new Promise(resolve => {
      const id = session;
      chips.innerHTML = '';
      options.forEach(o => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'wa-chip'; b.textContent = o.label || o;
        b.addEventListener('click', () => { if (id !== session) return; chips.innerHTML = ''; onText = null; me(b.textContent); done(o.value !== undefined ? o.value : (o.label || o)); });
        chips.appendChild(b);
      });
      input.placeholder = free; input.type = type; input.setAttribute('autocomplete', auto);
      input.dir = type === 'email' ? 'ltr' : '';
      const done = v => { input.type = 'text'; input.setAttribute('autocomplete', 'off'); input.dir = ''; input.placeholder = T('Type a message…'); resolve(v); };
      onText = async text => {
        me(text);
        if (check && !check(text)) { await say(check.msg, 450); return; }   // ask again, keep listening
        chips.innerHTML = ''; onText = null; done(text);
      };
      if (!touch || !options.length) input.focus({ preventScroll: true });
    });
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = input.value.trim(); if (!t) return;
    input.value = '';
    if (onText) onText(t); else { me(t); helpAnswer(t); }
  });
  function setStep(step, text) {
    const li = ov.querySelector(`.wa__steps li[data-step="${step}"]`);
    li.querySelector('p').textContent = text; li.classList.add('is-set');
  }
  function light(group, names) {
    ov.querySelectorAll(`[data-pills="${group}"] span`).forEach(s => { if (names.includes(s.dataset.en)) s.classList.add('is-on'); });
  }

  /* ---------- brief mode ---------- */
  async function runBrief(preset) {
    const id = session;
    if (!await say(T("Hi, I'm Webloo. Let's pull your thread in under a minute. <b>What do you want to grow?</b>"), 500)) return;
    let goal;
    if (preset && GOALS[preset]) { me(T(GOALS[preset].label)); goal = preset; }
    else goal = await ask(Object.entries(GOALS).filter(([k]) => k !== 'loop').map(([k, g]) => ({ label: T(g.label), value: k })), { free: T('Or describe it in your words…') });
    if (id !== session) return;
    const g = GOALS[goal] || { label: goal, units: ['Digital', 'Sports', 'Retail', 'Experiences'] };
    brief.goal = g.label; setStep('Goal', T(g.label)); light('units', g.units); brief.units = g.units;

    if (!await say(T('Good. That brings in <b>{units}</b>. <b>Who is it for?</b>', { units: g.units.map(u => T(u)).join(rtl() ? '، ' : ', ') }))) return;
    const who = await ask(['Federation or league', 'Club', 'A brand', 'Venue or event', 'Healthcare', 'Other'].map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.for = who; setStep('For', T(who));

    if (!await say(T('<b>Where are your fans or customers?</b>'))) return;
    const where = await ask(Object.keys(WHERE).map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.where = where; setStep('Where', T(where));
    const offices = WHERE[where] || ['Newport Beach', 'Miami', 'Rabat', 'Skopje']; light('offices', offices); brief.offices = offices;

    if (!await say(T('Your team would come from <b>{offices}</b>. <b>When does it need to be live?</b>', { offices: offices.map(o => T(o)).join(T(' + ')) }))) return;
    const when = await ask(['This quarter', 'In 3 to 6 months', 'Later this year', 'Just exploring'].map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.when = when; setStep('When', T(when));

    // the same details as the contact form on webloo.com, asked one at a time
    if (!await say(T('<b>What budget range are you working with?</b>'))) return;
    const budget = await ask(['Under $25K', '$25K to $50K', '$50K to $100K', '$100K to $250K', '$250K+', 'Not sure yet'].map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.budget = budget; setStep('Budget', T(budget));

    if (!await say(T('<b>Which model fits best?</b> A defined scope of work, time and materials, or a partnership where we invest alongside you and share the result.'))) return;
    const model = await ask(['Scope of work', 'Time & materials', 'Partnership', 'Not sure yet'].map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.model = model;
    setStep('Budget', `${T(budget)} · ${T(model)}`);

    if (!await say(T('<b>Tell us a little more about the project.</b> A few lines is plenty.'))) return;
    brief.project = await ask([{ label: T('Skip'), value: '' }], { free: T('Describe it in your words…') });
    if (id !== session) return;

    if (!await say(T('Almost there. <b>What should we call you?</b>'))) return;
    const name = await ask([], { free: T('Your name'), auto: 'name' });
    if (id !== session) return;
    setStep('You', name);
    const first = escapeHtml(name.split(' ')[0]);
    if (!await say(T('Nice to meet you, {name}. <b>Your work email?</b> That is where the team will reply.', { name: first }))) return;
    const isEmail = t => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t);
    isEmail.msg = T('Hmm, that email does not look right. <b>Could you check it?</b>');
    const email = await ask([], { free: 'name@company.com', type: 'email', auto: 'email', check: isEmail });
    if (id !== session) return;
    if (!await say(T('And the company or organisation? <i>(optional)</i>'))) return;
    const company = await ask([{ label: T('Skip'), value: '' }], { free: T('Company'), auto: 'organization' });
    if (id !== session) return;
    if (!await say(T('A phone number, if you prefer a call? <i>(optional)</i>'))) return;
    const isPhone = t => /^[+()\d\s.-]{6,}$/.test(t);
    isPhone.msg = T('That number looks incomplete. <b>Try again, or skip.</b>');
    const phone = await ask([{ label: T('Skip'), value: '' }], { free: '+212 6 00 00 00 00', type: 'tel', auto: 'tel', check: isPhone });
    if (id !== session) return;
    brief.name = name; brief.email = email; brief.company = company; brief.phone = phone;
    setStep('You', [name, company].filter(Boolean).join(' · '));

    if (!await say(T('Last thing. <b>Can we use these details to reply to you?</b> See our <a href="{url}" target="_blank" rel="noopener">Privacy Policy</a>.', { url: PRIVACY }))) return;
    const ok = await ask([{ label: T('I agree'), value: 'yes' }, { label: T('Not now'), value: 'no' }], { free: T('Type a message…') });
    if (id !== session) return;
    if (ok !== 'yes') {
      await say(T('No problem. Nothing has been sent. You can write to us any time at <a href="mailto:{email}">{email}</a>.', { email: EMAIL }));
      return helpChips();
    }
    brief.consent = true;
    ov.classList.add('is-done');
    await say(T('Your thread is ready, {name}. <b>One team, {n} units, zero hand-offs.</b> We reply within one business day.', { name: escapeHtml(brief.name.split(' ')[0]), n: brief.units.length }) + sendButtons(), 900);
    await offerCall();
  }

  /* ---------- the email: everything the visitor told us, plus the call they picked ---------- */
  function mailBody() {
    return [
      brief.goal && `Goal: ${brief.goal}`, brief.for && `For: ${brief.for}`, brief.where && `Where: ${brief.where}`, brief.when && `When: ${brief.when}`,
      brief.budget && `Budget: ${brief.budget}`, brief.model && `Model: ${brief.model}`,
      brief.units && `Units: ${brief.units.join(', ')}`, brief.offices && `Team from: ${brief.offices.join(', ')}`,
      brief.project && `\nProject:\n${brief.project}\n`,
      call && `\nIntro call requested (30 min, Google Meet):\n${call.mine} (${call.tz})\n${call.theirs} (${call.office}, ${call.officeTz})\n`,
      `Name: ${brief.name || ''}`, `Email: ${brief.email || ''}`, brief.company && `Company: ${brief.company}`, brief.phone && `Phone: ${brief.phone}`,
      brief.consent && 'Privacy Policy: agreed',
    ].filter(Boolean).join('\n');
  }
  function mailHref() {
    const subject = call ? `Intro call: ${call.mine}${brief.goal ? ' · ' + brief.goal : ''}` : `Start a project: ${brief.goal || ''}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody())}`;
  }
  const sendButtons = () => `<div class="wa-actions"><a class="wa-btn" href="${mailHref()}" data-send>${T('Send my thread →')}</a><button type="button" class="wa-btn wa-btn--ghost" data-copy>${T('Copy it')}</button></div>`;
  log.addEventListener('click', e => {
    if (e.target.closest('[data-send]')) { sent = true; e.target.closest('[data-send]').href = mailHref(); }
    const c = e.target.closest('[data-copy]');
    if (c) { navigator.clipboard && navigator.clipboard.writeText(mailBody()); c.textContent = T('Copied'); }
  });

  /* ---------- Book a call: Webloo's own picker ---------- */
  // Times are offered inside the office's working hours and shown in the visitor's own time zone.
  // The request travels with the thread; the team confirms by email with a Google Meet invite.
  const OFFICE_TZ = { 'Newport Beach': 'America/Los_Angeles', 'Miami': 'America/New_York', 'Rabat': 'Africa/Casablanca', 'Skopje': 'Europe/Skopje' };
  const HOURS = [10, 11, 12, 14, 15, 16];
  const myTZ = (Intl.DateTimeFormat().resolvedOptions().timeZone) || 'UTC';
  const locale = () => ({ fr: 'fr-FR', ar: 'ar-MA' }[document.documentElement.lang] || 'en-GB');
  const tzOffset = (tz, date) => {   // minutes the zone is ahead of UTC at that moment
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).formatToParts(date).map(x => [x.type, x.value]));
    return (Date.UTC(+p.year, p.month - 1, +p.day, +p.hour, +p.minute) - date.getTime()) / 60000;
  };
  const wallTime = (y, m, d, h, tz) => { const guess = Date.UTC(y, m, d, h, 0); return new Date(guess - tzOffset(tz, new Date(guess)) * 60000); };
  const fmt = (date, tz, o) => new Intl.DateTimeFormat(locale(), { timeZone: tz, ...o }).format(date);
  function workDays(tz, n) {
    const out = [], soon = Date.now() + 12 * 3600e3;
    for (let i = 1; out.length < n && i < 30; i++) {
      const probe = new Date(Date.now() + i * 864e5);
      const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: tz, year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }).formatToParts(probe).map(x => [x.type, x.value]));
      if (p.weekday === 'Sat' || p.weekday === 'Sun') continue;
      const slots = HOURS.map(h => wallTime(+p.year, p.month - 1, +p.day, h, tz)).filter(t => t.getTime() > soon);
      if (slots.length) out.push({ date: slots[0], slots });
    }
    return out;
  }
  async function offerCall() {
    if (!await say(T('Prefer to talk it through? <b>Book a 30-minute intro call</b> with the team, on Google Meet.'), 700)) return;
    const id = session;
    chips.innerHTML = '';
    const b = document.createElement('button'); b.type = 'button'; b.className = 'wa-chip wa-chip--call'; b.textContent = T('Book a call');
    b.addEventListener('click', () => { if (id === session) showCalendar(); });
    chips.appendChild(b);
  }
  function showCalendar() {
    const id = session;
    chips.innerHTML = ''; me(T('Book a call'));
    const office = (brief.offices && brief.offices[0]) || 'Rabat', tz = OFFICE_TZ[office];
    const days = workDays(tz, 8);
    const row = document.createElement('div'); row.className = 'wa-row wa-row--wide';
    row.innerHTML = `<div class="wa-book">
      <div class="wa-book__head"><span class="wa-book__mark">${markSvg('wa-mark')}</span>
        <div><b>${T('Introduction to Webloo')}</b><span>${T('30 min · Google Meet · with the {office} team', { office: T(office) })}</span></div></div>
      <p class="wa-book__k mono">${T('1. Pick a day')}</p>
      <div class="wa-book__days">${days.map((d, i) => `<button type="button" data-d="${i}"><small>${fmt(d.date, myTZ, { weekday: 'short' })}</small><b>${fmt(d.date, myTZ, { day: 'numeric' })}</b><small>${fmt(d.date, myTZ, { month: 'short' })}</small></button>`).join('')}</div>
      <p class="wa-book__k mono">${T('2. Pick a time')} <span>${T('in your time zone')} · ${myTZ.replace(/_/g, ' ')}</span></p>
      <div class="wa-book__times"><p class="wa-book__hint">${T('Choose a day first.')}</p></div>
      <div class="wa-book__foot"><p class="wa-book__there"></p><button type="button" class="wa-btn wa-book__go" disabled>${T('Request this time →')}</button></div>
      <a class="wa-book__live" href="${MEETING.replace('?embed=true', '')}" target="_blank" rel="noopener">${T('Or book instantly on our live calendar ↗')}</a>
    </div>`;
    log.appendChild(row); scroll();
    const times = row.querySelector('.wa-book__times'), go = row.querySelector('.wa-book__go'), there = row.querySelector('.wa-book__there');
    let pick = null;
    row.querySelectorAll('.wa-book__days button').forEach(btn => btn.addEventListener('click', () => {
      row.querySelectorAll('.wa-book__days button').forEach(x => x.classList.toggle('is-on', x === btn));
      const d = days[+btn.dataset.d];
      times.innerHTML = d.slots.map((t, i) => `<button type="button" data-t="${i}" style="--i:${i}">${fmt(t, myTZ, { hour: '2-digit', minute: '2-digit' })}</button>`).join('');
      pick = null; go.disabled = true; there.textContent = '';
      times.querySelectorAll('button').forEach(tb => tb.addEventListener('click', () => {
        times.querySelectorAll('button').forEach(x => x.classList.toggle('is-on', x === tb));
        pick = d.slots[+tb.dataset.t]; go.disabled = false;
        there.textContent = myTZ === tz ? '' : T('That is {time} in {office}.', { time: fmt(pick, tz, { hour: '2-digit', minute: '2-digit' }), office: T(office) });
      }));
    }));
    go.addEventListener('click', async () => {
      if (!pick || id !== session) return;
      const longO = { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
      call = { start: pick, mine: fmt(pick, myTZ, longO), theirs: fmt(pick, tz, longO), tz: myTZ, office, officeTz: tz };
      row.classList.add('is-picked'); go.textContent = T('Requested ✓'); go.disabled = true;
      const box = ov.querySelector('.wa__callbox'); box.hidden = false; box.querySelector('.wa__call').textContent = call.mine;
      me(call.mine);
      if (!brief.email) {   // came straight from "Book a call": ask just enough to confirm it
        if (!await say(T('Great choice. <b>What should we call you?</b>'))) return;
        brief.name = await ask([], { free: T('Your name'), auto: 'name' }); if (id !== session) return;
        const isEmail = t => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t);
        isEmail.msg = T('Hmm, that email does not look right. <b>Could you check it?</b>');
        if (!await say(T('<b>And your work email?</b> The Google Meet invite goes there.'))) return;
        brief.email = await ask([], { free: 'name@company.com', type: 'email', auto: 'email', check: isEmail }); if (id !== session) return;
      }
      await say(T('<b>{time}</b> is held for you. <b>One step left:</b> send your thread and we confirm with a Google Meet invite within one business day.', { time: escapeHtml(call.mine) }) + sendButtons(), 700);
      helpChipsLater();
    });
  }
  async function remind() {
    await say(T('Before you go: your call on <b>{time}</b> is not confirmed yet. Send your thread and we will reply with a Google Meet invite.', { time: escapeHtml(call.mine) }) + sendButtons(), 300);
  }
  function helpChipsLater() { if (!ov.classList.contains('is-brief')) helpChips(); else chips.innerHTML = ''; }

  /* ---------- help mode ---------- */
  async function runHelp() {
    if (!await say(T("Hi, I'm Webloo. <b>How can we help?</b>"), 450)) return;
    helpChips();
  }
  function helpChips() {
    const id = session;
    chips.innerHTML = '';
    [['Start a project', () => { reset(); ov.classList.add('is-brief'); runBrief(); }],
     ['What does Webloo do?', () => helpAnswer('what do you do')],
     ['Where are you based?', () => helpAnswer('where are you')],
     ['Who have you worked with?', () => helpAnswer('clients')],
     ['Book a call', () => showCalendar()],
     ['Talk to a human', () => human()]].forEach(([label, fn]) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'wa-chip'; b.textContent = T(label);
      b.addEventListener('click', () => { if (id !== session) return; if (label !== 'Start a project' && label !== 'Book a call') me(T(label)); fn(); });
      chips.appendChild(b);
    });
    input.placeholder = T('Ask anything…');
  }
  async function helpAnswer(text) {
    if (/start|project|brief|quote|proposal|projet|lancer|devis|مشروع|ابدأ|عرض/i.test(text)) { reset(); ov.classList.add('is-brief'); return runBrief(); }
    if (/book|meeting|schedule|appointment|rendez|réserver|rdv|موعد|اجتماع|احجز/i.test(text)) return showCalendar();
    if (/human|person|call|phone|talk|support|contact|whatsapp|humain|appeler|téléphone|parler|شخص|اتصال|هاتف|تواصل|تحدث|واتساب/i.test(text)) return human();
    const hit = FAQ.find(f => f.k.test(text));
    await say(T(hit ? hit.a : "Good question. I'm a simple assistant for now, so let me connect you with the team, or we can start a 60-second brief."));
    helpChips();
  }
  async function human() {
    await say(T(`Of course. Email <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="tel:+19493925241">${PHONE}</a>. A real person replies within one business day.`));
    helpChips();
  }
  const escapeHtml = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- entry points ---------- */
  /* ---------- it reads the page: message + action follow the section in view ---------- */
  const CONTEXT = [
    ['.hero',    'Ask Webloo anything',      'help'],
    ['.problem', 'Skip the hand-offs',        'brief'],
    ['.pull',    'Brief this in 60 seconds',  'brief-pull'],
    ['.eco',     'Which unit do I need?',     'help'],
    ['.work',    'Want results like these?',  'brief'],
    ['.proof',   'Talk to a human',           'help'],
    ['.quote',   'Talk to a human',           'help'],
    ['.faq',     'Still have a question?',    'help'],
  ];
  let ctxAction = 'help', sayTimer = 0;
  const msgWrap = fab.querySelector('.wa-fab__txt');
  function setMessage(text) {
    msgWrap.querySelectorAll('.wa-fab__msg.is-out').forEach(m => m.remove());   // never stack more than two
    const cur = msgWrap.querySelector('.wa-fab__msg');
    if (cur && cur.textContent === text) return;
    const next = document.createElement('span'); next.className = 'wa-fab__msg is-in'; next.textContent = text;
    if (cur) { cur.classList.add('is-out'); cur.addEventListener('transitionend', () => cur.remove(), { once: true }); setTimeout(() => cur.remove(), 600); }
    msgWrap.appendChild(next);
    // the circle slides open for a moment to say it, then folds back
    if (cur) { fab.classList.add('is-say'); clearTimeout(sayTimer); sayTimer = setTimeout(() => fab.classList.remove('is-say'), 3200); }
    next.getBoundingClientRect();            // commit the start position, then slide in
    next.classList.remove('is-in');
    msgWrap.style.setProperty('--w', Math.ceil(next.scrollWidth) + 2 + 'px');   // open exactly as wide as the message
    fab.setAttribute('aria-label', text);
  }
  function readPage() {
    const mid = innerHeight * 0.45;
    const hit = CONTEXT.find(([sel]) => { const el = document.querySelector(sel); if (!el) return false; const r = el.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; });
    if (hit) { setMessage(T(hit[1])); ctxAction = hit[2]; }
    const cta = document.querySelector('.cta__btn'), r = cta && cta.getBoundingClientRect();
    fab.classList.toggle('is-away', !!r && r.top < innerHeight && r.bottom > 0);
  }
  let reading = false;
  addEventListener('scroll', () => { if (reading) return; reading = true; requestAnimationFrame(() => { readPage(); reading = false; }); }, { passive: true });
  addEventListener('resize', readPage);
  readPage();
  { const m = msgWrap.querySelector('.wa-fab__msg'); if (m) msgWrap.style.setProperty('--w', Math.ceil(m.scrollWidth) + 2 + 'px'); }
  const sayHello = () => { fab.classList.add('is-say'); sayTimer = setTimeout(() => fab.classList.remove('is-say'), 3200); };

  /* Entrance: the "oo" of the logo lifts off the header and travels to the corner, so the eye follows it to the assistant */
  function flyIn() {
    const logo = document.querySelector('.nav__logo svg');
    if (reduce || !logo || !fab.animate) return setTimeout(sayHello, 1800);
    const l = logo.getBoundingClientRect(), f = fab.getBoundingClientRect();
    // the loop sits at the end of the wordmark
    const fromX = (l.right - l.height * 0.9) - (f.left + f.width / 2), fromY = (l.top + l.height / 2) - (f.top + f.height / 2);
    const arcX = fromX * 0.35, arcY = fromY * 0.15 - 120;      // a soft curve through the page
    fab.classList.add('is-flying');
    const a = fab.animate([
      { transform: `translate(${fromX}px, ${fromY}px) scale(.45) rotate(-180deg)`, opacity: 0 },
      { transform: `translate(${fromX}px, ${fromY}px) scale(.55) rotate(-160deg)`, opacity: 1, offset: .12 },
      { transform: `translate(${arcX}px, ${arcY}px) scale(1.25) rotate(-40deg)`, offset: .62 },
      { transform: 'translate(0, 0) scale(.92) rotate(0deg)', offset: .88 },
      { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
    ], { duration: 1500, delay: 2300, easing: 'cubic-bezier(.45,0,.2,1)', fill: 'backwards' });
    a.onfinish = () => { fab.classList.remove('is-flying'); fab.classList.add('is-landed'); setTimeout(() => fab.classList.remove('is-landed'), 900); sayHello(); };
  }
  if (document.readyState === 'complete') flyIn(); else addEventListener('load', flyIn, { once: true });

  function openFromFab(e) {
    if (ctxAction === 'brief') return open('brief', e);
    if (ctxAction === 'brief-pull') { const on = document.querySelector('.pull__opt.is-on'); return open('brief', e, on && on.dataset.route); }
    open('help', e);
  }
  // Pull it up to open (a click works too).
  let pullStart = null, pulled = false;
  fab.addEventListener('pointerdown', e => { pullStart = { y: e.clientY, x: e.clientX }; pulled = false; fab.setPointerCapture(e.pointerId); });
  fab.addEventListener('pointermove', e => {
    if (!pullStart) return;
    const dy = Math.min(0, e.clientY - pullStart.y);
    fab.style.setProperty('--pull', `${Math.max(dy, -90) * 0.55}px`);
    if (dy < -55 && !pulled) { pulled = true; pullStart = null; fab.style.setProperty('--pull', '0px'); openFromFab(e); }
  });
  const endPull = () => { pullStart = null; fab.style.setProperty('--pull', '0px'); };
  fab.addEventListener('pointerup', endPull); fab.addEventListener('pointercancel', endPull);
  fab.addEventListener('click', e => { if (pulled) { pulled = false; return; } openFromFab(e); });
  // Final button and the Pull-your-thread button open the brief straight away, from where you clicked.
  // Any other "Start a project" link first scrolls down so the line races into the final button,
  // then the brief opens out of that button.
  document.addEventListener('click', async e => {
    const a = e.target.closest('a[href="#start"], .cta__btn, .pull__cta, .peek__cta, .loop__cta');
    if (!a) return;
    e.preventDefault();
    if (a.classList.contains('pull__cta')) {
      const on = document.querySelector('.pull__opt.is-on');
      return open('brief', e, on && on.dataset.route);
    }
    if (a.classList.contains('cta__btn')) return open('brief', e);
    if (a.classList.contains('loop__cta')) return open('brief', e, 'loop');
    if (a.classList.contains('peek__cta')) { window.WebPeek && WebPeek.close(); return open('brief', e); }
    const btn = document.querySelector('.cta__btn');
    btn.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    const t0 = performance.now();
    while (!btn.classList.contains('is-reached') && performance.now() - t0 < 2200) await wait(80);
    await wait(350);
    const r = btn.getBoundingClientRect();
    open('brief', { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 });
  });
  addEventListener('langchange', () => { if (!ov.hidden) close(); translateShell(); readPage(); });
})();
