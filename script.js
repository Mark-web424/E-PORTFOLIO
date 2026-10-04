const artifactData = {
	1: {
		title: "INFOMERCIAL",
		badge: "Score: 100 / 100",
		type: "video",
		video: "images/Infomercial.mp4",
		solution: "1. Conceptualized video script linking limits and derivatives to web server performance.\n2. Produced visual presentation demonstrating network bandwidth utilization.\n3. Final Submission Score: 100/100.",
		concept: "Calculus Applications in Web Optimization & Bandwidth Modeling."
	},
	2: {
		title: "ACTIVITY #1: Function Operations",
		badge: "Score: 25 / 25",
		type: "image",
		image: "images/act_1.jpg",
		solution: "1. Addition: (f+g)(x) = f(x) + g(x)\n2. Subtraction: (f-g)(x) = f(x) - g(x)\n3. Multiplication: (f·g)(x) = f(x) · g(x)\n4. Composition: (f ∘ g)(x) = f(g(x))\nScore: 25/25.",
		concept: "Algebra of Functions & Composite Function Evaluation."
	},
	3: {
		title: "POSTER: Function Operations Poster",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/poster.png",
		solution: "Given f(x) = 2x+3 and g(x) = x-5:\n• (f+g)(x) = (2x+3) + (x-5) = 3x - 2\n• (f-g)(x) = (2x+3) - (x-5) = x + 8\n• (fg)(x) = (2x+3)(x-5) = 2x² - 7x - 15\n• (f ∘ g)(x) = 2(x-5) + 3 = 2x - 7\nScore: 50/50.",
		concept: "Visual Presentation of Function Operations."
	},
	4: {
		title: "ACTIVITY #2: Rational Limits",
		badge: "Score: 19 / 25",
		type: "image",
		image: "images/act_2.jpg",
		solution: "1. Evaluated algebraic limits leading to indeterminate form (0/0).\n2. Applied factoring and conjugate multiplication to clear zero denominators.\nScore: 19/25.",
		concept: "Limit Evaluation & Indeterminate Forms."
	},
	5: {
		title: "ACTIVITY CARD: Group Cover Page",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/index.jpg",
		solution: "Group project cover sheet, student roster, and submission tracking page.\nScore: 50/50.",
		concept: "Collaborative Documentation & Project Management."
	},
	6: {
		title: "ACTIVITY CARD: Page 1 - Direct Substitution",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_01.jpg",
		solution: "Evaluate lim (x² + 2x + 1) as x → 3:\n= (3)² + 2(3) + 1 = 9 + 6 + 1 = 16.",
		concept: "Direct Substitution Limit Rule."
	},
	7: {
		title: "ACTIVITY CARD: Page 2 - Polynomial Substitution",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_02.jpg",
		solution: "Evaluate lim (2x² - 4x + 5) as x → 3:\n= 2(3)² - 4(3) + 5 = 18 - 12 + 5 = 11.",
		concept: "Polynomial Limit Evaluation."
	},
	8: {
		title: "ACTIVITY CARD: Page 3 - Limit via Factoring",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_03.jpg",
		solution: "Evaluate lim (x² - 9)/(x - 3) as x → 3:\n= lim [(x-3)(x+3)] / (x-3) = lim (x+3) = 3 + 3 = 6.",
		concept: "Factoring Removable Discontinuities."
	},
	9: {
		title: "ACTIVITY CARD: Page 4 - Indeterminate Limit",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_04.jpg",
		solution: "Evaluate lim (x² - 16)/(x - 4) as x → 4:\n= lim [(x-4)(x+4)] / (x-4) = lim (x+4) = 4 + 4 = 8.",
		concept: "Difference of Squares Factoring Method."
	},
	10: {
		title: "ACTIVITY CARD: Page 5 - Perfect Square Limit",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_05.jpg",
		solution: "Evaluate lim (x² + 4x + 4) as x → 2:\n= (2)² + 4(2) + 4 = 4 + 8 + 4 = 16.",
		concept: "Perfect Square Trinomial Limit."
	},
	11: {
		title: "ACTIVITY CARD: Page 6 - Complex Fraction Limit",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_06.jpg",
		solution: "Evaluate lim [1/(2+x) - 1/2] / x as x → 0:\n= lim [ (2 - (2+x)) / (2(2+x)) ] / x\n= lim [ -x / (2x(2+x)) ] = lim [ -1 / (2(2+x)) ] = -1/4.",
		concept: "Simplifying Complex Rational Expressions."
	},
	12: {
		title: "ACTIVITY CARD: Page 7 - Radical Conjugate Limit",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_07.jpg",
		solution: "Evaluate lim (√x - 3)/(x - 9) as x → 9:\nMultiply by conjugate (√x + 3)/(√x + 3):\n= lim (x - 9) / [(x - 9)(√x + 3)] = lim 1/(√x + 3) = 1/6.",
		concept: "Conjugate Rationalization Technique."
	},
	13: {
		title: "ACTIVITY CARD: Page 8 - Difference of Cubes",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_08.jpg",
		solution: "Evaluate lim (x³ - 1)/(x - 1) as x → 1:\nFactor cube: (x³ - 1) = (x - 1)(x² + x + 1)\n= lim (x² + x + 1) = (1)² + 1 + 1 = 3.",
		concept: "Difference of Cubes Factoring Formula."
	},
	14: {
		title: "ACTIVITY CARD: Page 9 - Quadratic Substitution",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_09.jpg",
		solution: "Evaluate lim (2x² - 7) as x → 5:\n= 2(5)² - 7 = 2(25) - 7 = 50 - 7 = 43.",
		concept: "Quadratic Limit Evaluation."
	},
	15: {
		title: "ACTIVITY CARD: Page 10 - Radical Conjugate Practice",
		badge: "Score: 50 / 50",
		type: "image",
		image: "images/sheet_10.jpg",
		solution: "Evaluate lim (√x - 2)/(x - 4) as x → 4:\nMultiply numerator and denominator by (√x + 2):\n= lim (x - 4) / [(x - 4)(√x + 2)] = lim 1/(√x + 2) = 1/4.",
		concept: "Reinforced Conjugate Rationalization."
	},
	16: {
		title: "PRELIMS: Multiple Choice Part 1",
		badge: "Score: 47 / 50",
		type: "image",
		image: "images/exam_prelim_1.jpg",
		solution: "Comprehensive prelim exam covering limit laws, continuity, and algebraic evaluation.\nTotal Prelim Score: 47/50.",
		concept: "Theoretical Limits & Continuity."
	},
	17: {
		title: "PRELIMS: Solutions Part 2",
		badge: "Score: 47 / 50",
		type: "image",
		image: "images/exam_prelim_2.jpg",
		solution: "Calculated limit at infinity by dividing all terms by highest denominator power x⁴:\nlim (3x⁴ - 2x)/(5x⁴ + 7) as x → ∞ = 3/5.",
		concept: "Limits at Infinity & Asymptotic Behavior."
	},
	18: {
		title: "ACTIVITY #4: Differentiation Rules",
		badge: "Score: 20 / 20",
		type: "image",
		image: "images/act_4.jpg",
		solution: "1. Constant Rule: d/dx(c) = 0\n2. Power Rule: d/dx(xⁿ) = n·xⁿ⁻¹\n3. Sum Rule: d/dx[f(x) + g(x)] = f'(x) + g'(x)\nScore: 20/20.",
		concept: "Fundamental Rules of Differentiation."
	},
	19: {
		title: "ACTIVITY #5: Product Rule & Radicals",
		badge: "Score: 45 / 45",
		type: "image",
		image: "images/act_5.jpg",
		solution: "1. Product Rule: d/dx[u·v] = u·v' + v·u'\n2. Radical Derivatives: Rewrite √x as x¹/² and apply Power Rule → (1/2)x⁻¹/²\nScore: 45/45.",
		concept: "Product Rule & Rational Exponents."
	},
	20: {
		title: "ACTIVITY #6: Chain Rule Practice",
		badge: "Score: 20 / 20",
		type: "image",
		image: "images/act_6.jpg",
		solution: "Chain Rule: d/dx[f(g(x))] = f'(g(x)) · g'(x)\nExample: y = (2x + 3)⁵ → y' = 5(2x + 3)⁴ · (2) = 10(2x + 3)⁴.\nScore: 20/20.",
		concept: "Chain Rule for Composite Functions."
	},
	21: {
		title: "MIDTERMS: Multiple Choice Part 1",
		badge: "Score: 28 / 50",
		type: "image",
		image: "images/exam_midterm_1.jpg",
		solution: "Midterm exam assessment on derivatives, higher-order derivatives, and applications.\nScore: 28/50.",
		concept: "Midterm Derivative Assessment."
	},
	22: {
		title: "MIDTERMS: Solutions Part 2",
		badge: "Score: 28 / 50",
		type: "image",
		image: "images/exam_midterm_2.jpg",
		solution: "1. Higher Derivatives: Calculated f''(x), f'''(x), f⁴(x).\n2. Optimization: Solved f'(x) = 0 to determine parabola vertex at (2,0).",
		concept: "Higher-Order Derivatives & Critical Points."
	}
};

/* Open Modal Lightbox */
function openArtifactModal(id){
	const data = artifactData[id];
	if (!data) return;

	const modalImg = document.getElementById('modal-img');
	const modalVideo = document.getElementById('modal-video');
	const modalVideoSrc = document.getElementById('modal-video-src');

	if (data.type === 'video'){
		if (modalImg) modalImg.style.display = 'none';
		if (modalVideo){
			modalVideo.style.display = 'block';
			modalVideoSrc.src = data.video;
			modalVideo.load();
		}
	} else {
		if (modalVideo){
			modalVideo.pause();
			modalVideo.style.display = 'none';
		}
		if (modalImg){
			modalImg.style.display = 'block';
			modalImg.src = data.image;
		}
	}

	document.getElementById('modal-title').textContent = data.title;
	document.getElementById('modal-badge').textContent = data.badge;
	document.getElementById('modal-solution').innerText = data.solution;
	document.getElementById('modal-concept').innerText = data.concept;

	const reflectionEl = document.getElementById('modal-reflection');
	const reflectionBlock = reflectionEl ? reflectionEl.closest('.detail-block') : null;
	
	if (data.reflection) {
		reflectionEl.innerText = data.reflection;
		if (reflectionBlock) reflectionBlock.style.display = 'block';
	} else {
		if (reflectionBlock) reflectionBlock.style.display = 'none';
	}

	document.getElementById('image-modal').style.display = 'flex';
}

/* Close Modal Lightbox */
function closeModal(event){
	if (!event || event.target.id === 'image-modal' || event.target.classList.contains('close-btn')){
		const modalVideo = document.getElementById('modal-video');
		if (modalVideo){
			modalVideo.pause();
		}
		document.getElementById('image-modal').style.display = 'none';
	}
}

/* Auto-Indicator for Active Section in Header */
window.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('section, #welcome-section');
	const navLinks = document.querySelectorAll('.nav-links a');

	const observerOptions = {
		root: null,
		rootMargin: '-20% 0px -60% 0px',
		threshold: 0
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute('id');
				navLinks.forEach(link => {
					link.classList.remove('active');
					if (link.getAttribute('href') === `#${id}`) {
						link.classList.add('active');
						link.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
					}
				});
			}
		});
	}, observerOptions);

	sections.forEach(section => {
		observer.observe(section);
	});
});