/* =========================================================
   GARGI SHUKLA — NURSING TUTOR PORTFOLIO
   script.js — all functionality lives here (vanilla JS only)
   ========================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     0. SOURCE DATA (from resume — do not invent entries)
     --------------------------------------------------------- */

  var CLINICAL_EXPERIENCE = [
    { place: 'Dr. Ram Manohar Lohia Institute of Medical Sciences and Hospital, Lucknow', duration: '4 months' },
    { place: "Queen Mary's Hospital, KGMU, Lucknow", duration: '1 month 15 days' },
    { place: 'Medanta Hospital, Lucknow', duration: '6 weeks (1 month 15 days)' },
    { place: 'Nirvan Hospital Neuropsychiatric and Rehabilitation Centre, Lucknow', duration: '1 month' },
    { place: 'Dr. Shyama Prasad Mukherjee (Civil) Hospital, Lucknow', duration: '3 months' },
    { place: 'RSD Samarpan Hospital, Lucknow', duration: '6 months' },
    { place: 'Community Health Centre, Chinhat, Lucknow', duration: '2 months' },
    { place: 'Mahatma Gandhi MCH, Chinhat, Lucknow', duration: '1 month' },
    { place: 'Community Health Centre, Gosainganj, Lucknow', duration: '1 month' },
    { place: 'Primary Health Centre, Gosainganj, Lucknow', duration: '1 month' }
  ];

  var EDUCATION = [
    { title: "B.Sc Nursing 4th Year (R)", inst: "Samarpan Institute of Nursing and Paramedical Sciences, Lucknow (King George's Medical University)", year: '2022–2023', percent: 66.4 },
    { title: "B.Sc Nursing 3rd Year (R)", inst: "Samarpan Institute of Nursing and Paramedical Sciences, Lucknow (King George's Medical University)", year: '2021–2022', percent: 70 },
    { title: "B.Sc Nursing 2nd Year (R)", inst: "Samarpan Institute of Nursing and Paramedical Sciences, Lucknow (King George's Medical University)", year: '2020–2021', percent: 68.57 },
    { title: "B.Sc Nursing 1st Year (R)", inst: "Samarpan Institute of Nursing and Paramedical Sciences, Lucknow (King George's Medical University)", year: '2019–2020', percent: 68.75 },
    { title: 'ADL Exam — Biology', inst: 'Govt Girls Inter College, Singar Nagar, Lucknow', year: '2019', percent: 70 },
    { title: 'Intermediate — Mathematics', inst: 'Lucknow Public School, A-Block, South City, Lucknow', year: '2018', percent: 67 },
    { title: 'High School', inst: 'Lucknow Public School, A-Block, South City, Lucknow', year: '2016', percent: 81.7 }
  ];

  var WEBINARS = [
    { title: 'International webinar on advancement in Nursing research publications: A journey through Scholarly Galaxy', year: 2024 },
    { title: 'National level webinar on "Technology Used for Mental Treatment", Dept. of Mental Health Nursing, GF\'s Godavari College of Nursing, Jalgaon, Maharashtra', year: 2024 },
    { title: 'National level webinar on "Eggs Storage & Its Preservation", Dept. of Obstetrics and Gynaecology Nursing, GF\'s Godavari College of Nursing, Jalgaon, Maharashtra', year: 2024 },
    { title: 'National level webinar on "Addressing Malnutrition Among Children: Strategies for Nurses in India", Dept. of Child Health Nursing, GF\'s Godavari College of Nursing, Jalgaon, Maharashtra', year: 2024 },
    { title: 'National level webinar on "Hypopnea & Its Role in Preventing Stroke", Dept. of Medical Surgical Nursing, GF\'s Godavari College of Nursing, Jalgaon, Maharashtra', year: 2024 },
    { title: 'Webinar by Nursing Scholar Society Gerbera (Assam) Chapter on Intellectual Property Rights in Nursing Research and Innovation', year: 2024 },
    { title: 'National level webinar on "Empowering Communities for Healthy Aging: Gerontological Nursing in Community Settings", Dept. of Community Health Nursing, GF\'s Godavari College of Nursing, Jalgaon, Maharashtra', year: 2024 },
    { title: 'NTAI National webinar on awareness about World Health Day, Theme: "My Health My Right"', year: 2024 },
    { title: '3rd International Oral Cancer E-Conclave, theme: "Do It, But Do It Right", conducted by ICanCaRe Academy', year: 2023 },
    { title: 'Palliative Care Sanitization Programme for Nursing Fraternity', year: 2023 },
    { title: 'Sexual and Reproductive Health and Rights', year: 2023 },
    { title: 'Assessment and Management of Normal Labour', year: 2023 },
    { title: 'Assessment and Management of Abnormal Labour', year: 2023 },
    { title: 'Assessment and Management of High Risk Pregnancy', year: 2023 },
    { title: 'Pharmacodynamic in Obstetrics', year: 2023 },
    { title: 'E-learning Module on Breast CA: Types, Screening and Diagnosis', year: 2022 },
    { title: 'E-learning Module on Breast Cancer: Guidelines and Challenges in Diagnosis', year: 2022 },
    { title: 'E-learning Module on FAQ on Advancement in Breast Cancer: Clinical Diagnostics, Care Management, Radiotherapy, Surgery', year: 2022 },
    { title: 'E-learning Module on Clinical Innovation in Obstetrics and Gynaecology', year: 2022 },
    { title: 'International E-Conclave on Tobacco Cessation', year: 2021 },
    { title: 'E-learning Module on Ureteric Safety in Complex Gynaecology Surgeries', year: 2021 },
    { title: 'International Webinar on the Occasion of World Mental Health Day', year: 2021 }
  ];

  var CONFERENCES = [
    { title: 'International Virtual Conference by Vibrant Nursing College, Surat, with National Nursing Scholar Society, WHO theme: "My Health - My Rights"', year: 2024 },
    { title: 'TNAI & SNAI theme: "Empowering Nursing Students: Prospects and Challenges" — The State 30th SNAI Biennial Conference, hosted by Samarpan Institute of Nursing and Paramedical Sciences', year: 2023 },
    { title: 'International Advanced Faculty Development Program on Mechanics of Manuscript, Thesis Drafting and Application of Research Software, Eusoxia Research University, USA — 10 credit points', year: 2023 },
    { title: '1st National Conference on "Emergency & Trauma Care Nursing", St. Mary\'s College of Nursing, Lucknow — 2 credit points', year: 2023 },
    { title: '8th National Conference on "Intellectual Property Rights: Scope in Nursing", King George\'s Medical University — 4 credit points', year: 2023 },
    { title: 'Telemedicine and Virtual Practice as Effective Technologies in Alternative Medicine and Complementary Therapies, Samarpan Institute of Nursing and Paramedical Sciences — 2 credit points', year: 2022 }
  ];

  var WHATSAPP_NUMBER = '917007714190';
  var WEBINAR_PAGE_SIZE = 9;
  var webinarShownCount = WEBINAR_PAGE_SIZE;

  /* ---------------------------------------------------------
     1. NAVIGATION — hamburger, active link, smooth scroll
     --------------------------------------------------------- */

  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var navMenu = document.getElementById('navMenu');

  function closeMenu() {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  hamburgerBtn.addEventListener('click', function () {
    var isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Active nav link on scroll
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  function updateActiveLink() {
    var scrollPos = window.scrollY + 120;
    var currentId = sections.length ? sections[0].id : null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + currentId;
      link.classList.toggle('active', match);
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ---------------------------------------------------------
     2. WHATSAPP INTEGRATION
     --------------------------------------------------------- */

  function buildWhatsappUrl(message) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  var defaultWhatsappMsg = 'Hello Gargi, I would like to discuss a professional opportunity / nursing education related enquiry with you.';
  var defaultWhatsappUrl = buildWhatsappUrl(defaultWhatsappMsg);

  ['heroWhatsapp', 'sideWhatsapp', 'ctaWhatsapp', 'floatingWhatsapp'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.href = defaultWhatsappUrl;
  });

  /* ---------------------------------------------------------
     3. RENDER: CLINICAL EXPERIENCE TIMELINE
     --------------------------------------------------------- */

  var clinicalTimeline = document.getElementById('clinicalTimeline');
  CLINICAL_EXPERIENCE.forEach(function (item) {
    var el = document.createElement('div');
    el.className = 'timeline-item reveal';
    el.innerHTML =
      '<div class="timeline-dot" aria-hidden="true"></div>' +
      '<div class="timeline-card">' +
        '<span class="timeline-duration">' + item.duration + '</span>' +
        '<h3>' + item.place + '</h3>' +
      '</div>';
    clinicalTimeline.appendChild(el);
  });

  /* ---------------------------------------------------------
     4. RENDER: EDUCATION CARDS
     --------------------------------------------------------- */

  var eduGrid = document.getElementById('eduGrid');
  EDUCATION.forEach(function (item) {
    var el = document.createElement('article');
    el.className = 'edu-card reveal';
    el.innerHTML =
      '<div class="edu-card-top"><h3>' + item.title + '</h3><span class="edu-year">' + item.year + '</span></div>' +
      '<p class="edu-inst">' + item.inst + '</p>' +
      '<div class="edu-percent-bar"><div class="edu-percent-fill" style="width:' + item.percent + '%"></div></div>' +
      '<div class="edu-percent-label"><span>Result</span><span>' + item.percent + '%</span></div>';
    eduGrid.appendChild(el);
  });

  /* ---------------------------------------------------------
     5. RENDER: CONFERENCES TIMELINE
     --------------------------------------------------------- */

  var conferenceTimeline = document.getElementById('conferenceTimeline');
  CONFERENCES.forEach(function (item) {
    var el = document.createElement('div');
    el.className = 'timeline-item reveal';
    el.innerHTML =
      '<div class="timeline-dot" aria-hidden="true"></div>' +
      '<div class="timeline-card">' +
        '<span class="timeline-duration">' + item.year + '</span>' +
        '<h3>' + item.title + '</h3>' +
      '</div>';
    conferenceTimeline.appendChild(el);
  });

  /* ---------------------------------------------------------
     6. WEBINARS — render, search, year filter, show more/less
     --------------------------------------------------------- */

  var webinarGrid = document.getElementById('webinarGrid');
  var webinarEmpty = document.getElementById('webinarEmpty');
  var webinarSearch = document.getElementById('webinarSearch');
  var webinarYearSelect = document.getElementById('webinarYear');
  var webinarCount = document.getElementById('webinarCount');
  var webinarShowMoreBtn = document.getElementById('webinarShowMoreBtn');

  // Populate year filter options
  var years = Array.prototype.slice.call(new Set(WEBINARS.map(function (w) { return w.year; })));
  years.sort(function (a, b) { return b - a; });
  years.forEach(function (y) {
    var opt = document.createElement('option');
    opt.value = String(y);
    opt.textContent = y;
    webinarYearSelect.appendChild(opt);
  });

  function getFilteredWebinars() {
    var query = webinarSearch.value.trim().toLowerCase();
    var year = webinarYearSelect.value;
    return WEBINARS.filter(function (w) {
      var matchesQuery = !query || w.title.toLowerCase().indexOf(query) !== -1;
      var matchesYear = year === 'all' || String(w.year) === year;
      return matchesQuery && matchesYear;
    });
  }

  function renderWebinars() {
    var filtered = getFilteredWebinars();
    webinarGrid.innerHTML = '';

    if (filtered.length === 0) {
      webinarEmpty.hidden = false;
    } else {
      webinarEmpty.hidden = true;
    }

    var visible = filtered.slice(0, webinarShownCount);

    visible.forEach(function (w, i) {
      var card = document.createElement('article');
      card.className = 'webinar-card reveal in-view';
      card.innerHTML =
        '<div class="webinar-card-top">' +
          '<span class="webinar-index">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span class="webinar-year">' + w.year + '</span>' +
        '</div>' +
        '<p>' + w.title + '</p>';
      webinarGrid.appendChild(card);
    });

    webinarCount.textContent = filtered.length + ' webinar' + (filtered.length === 1 ? '' : 's') +
      (filtered.length !== WEBINARS.length ? ' of ' + WEBINARS.length : '');

    webinarShowMoreBtn.hidden = filtered.length <= webinarShownCount;
  }

  webinarSearch.addEventListener('input', function () {
    webinarShownCount = WEBINAR_PAGE_SIZE;
    renderWebinars();
  });
  webinarYearSelect.addEventListener('change', function () {
    webinarShownCount = WEBINAR_PAGE_SIZE;
    renderWebinars();
  });
  webinarShowMoreBtn.addEventListener('click', function () {
    var totalFiltered = getFilteredWebinars().length;
    if (webinarShownCount < totalFiltered) {
      webinarShownCount = Math.min(webinarShownCount + WEBINAR_PAGE_SIZE, totalFiltered);
    } else {
      webinarShownCount = WEBINAR_PAGE_SIZE; // collapse back
      document.getElementById('webinars').scrollIntoView({ behavior: 'smooth' });
    }
    renderWebinars();
  });

  renderWebinars();

  /* ---------------------------------------------------------
     7. CONTACT FORM — validation + WhatsApp message generation
     --------------------------------------------------------- */

  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  function setFieldError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var errorEl = document.getElementById('err-' + fieldId);
    var wrapper = field.closest('.form-field');
    if (message) {
      wrapper.classList.add('has-error');
      if (errorEl) errorEl.textContent = message;
    } else {
      wrapper.classList.remove('has-error');
      if (errorEl) errorEl.textContent = '';
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    return /^[0-9+\-\s()]{7,15}$/.test(value);
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var organization = document.getElementById('organization').value.trim();
    var designation = document.getElementById('designation').value.trim();
    var purpose = document.getElementById('purpose').value;
    var message = document.getElementById('message').value.trim();
    var contactMethodEl = contactForm.querySelector('input[name="contactMethod"]:checked');
    var contactMethod = contactMethodEl ? contactMethodEl.value : '';

    var valid = true;

    if (!fullName) { setFieldError('fullName', 'Please enter your name.'); valid = false; }
    else setFieldError('fullName', '');

    if (!email || !isValidEmail(email)) { setFieldError('email', 'Please enter a valid email address.'); valid = false; }
    else setFieldError('email', '');

    if (!phone || !isValidPhone(phone)) { setFieldError('phone', 'Please enter a valid phone number.'); valid = false; }
    else setFieldError('phone', '');

    if (!purpose) { setFieldError('purpose', 'Please select a purpose.'); valid = false; }
    else setFieldError('purpose', '');

    if (!message) { setFieldError('message', 'Please add a short message.'); valid = false; }
    else setFieldError('message', '');

    if (!valid) {
      formStatus.textContent = 'Please fix the highlighted fields and try again.';
      formStatus.className = 'form-note error';
      return;
    }

    var lines = [
      'Hello Gargi,', '',
      'I would like to contact you regarding:', '',
      'Name: ' + fullName,
      'Email: ' + email,
      'Phone: ' + phone,
      'Organization: ' + (organization || '-'),
      'Designation: ' + (designation || '-'),
      'Purpose: ' + purpose,
      'Preferred Contact: ' + contactMethod, '',
      'Message:',
      message
    ];
    var whatsappMessage = lines.join('\n');
    var url = buildWhatsappUrl(whatsappMessage);

    formStatus.textContent = 'Opening WhatsApp with your enquiry details…';
    formStatus.className = 'form-note success';

    window.open(url, '_blank', 'noopener');
    contactForm.reset();
  });

  /* ---------------------------------------------------------
     8. COPY EMAIL BUTTON
     --------------------------------------------------------- */

  var copyEmailBtn = document.getElementById('copyEmailBtn');
  var copyEmailStatus = document.getElementById('copyEmailStatus');
  var emailAddress = 'shuklagargi8565@gmail.com';

  copyEmailBtn.addEventListener('click', function () {
    function done(success) {
      copyEmailStatus.textContent = success ? 'Copied!' : 'Copy failed — copy manually';
      setTimeout(function () { copyEmailStatus.textContent = 'Click to copy'; }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailAddress).then(function () { done(true); }, function () { done(false); });
    } else {
      var temp = document.createElement('textarea');
      temp.value = emailAddress;
      document.body.appendChild(temp);
      temp.select();
      try { document.execCommand('copy'); done(true); } catch (err) { done(false); }
      document.body.removeChild(temp);
    }
  });

  /* ---------------------------------------------------------
     9. SCROLL REVEAL ANIMATIONS
     --------------------------------------------------------- */

  var revealTargets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (t) { observer.observe(t); });
  } else {
    revealTargets.forEach(function (t) { t.classList.add('in-view'); });
  }

  /* ---------------------------------------------------------
     10. BACK TO TOP BUTTON
     --------------------------------------------------------- */

  var backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------------------------------------------------
     11. CURRENT YEAR IN FOOTER
     --------------------------------------------------------- */

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     12. DOWNLOAD RESUME — graceful fallback if PDF is missing
     --------------------------------------------------------- */

  var downloadResumeBtn = document.getElementById('downloadResumeBtn');
  downloadResumeBtn.addEventListener('click', function (e) {
    // If assets/GARGI-SHUKLA-Resume.pdf has not been added yet, let the user know
    // instead of navigating to a broken link. Update the href in index.html once
    // the real PDF is placed in the assets folder.
    fetch(downloadResumeBtn.getAttribute('href'), { method: 'HEAD' })
      .then(function (res) {
        if (!res.ok) throw new Error('missing');
      })
      .catch(function () {
        e.preventDefault();
        alert('The resume PDF has not been added yet. Place GARGI-SHUKLA-Resume.pdf inside the assets folder to enable this button.');
      });
  });

})();
