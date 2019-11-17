(function() {
  let template = document.createElement("template");
  template.innerHTML = `
		<style>
    //////////////////////////////////
    // Design Tokens
    //////////////////////////////////
    
    //////////////////////////////////
    // Color Palette
    //////////////////////////////////
    :root {
      --gray-darkest: #292E31;
      --gray-darker: #505558;
      --gray-dark: #777C7F;
      --gray: #9EA3A6;
      --gray-alt: #C5CACD;
      --gray-light: #EDF2F5;
      --gray-lighter: #F2F2F2;
      --gray-lightest: #F8F8F8;
      --white: #FFFFFF;
      
      --blue: #17509F;
      --blue-dark: #0018AB;
      --blue-light: #2785D6;
      
      --purple: #9933CC;
      
      --gradient: linear-gradient(to right, var(--blue-dark), var(--purple));
      
      --cyan: #0A7DAF;
      --cyan-dark: #0D9DDB;
      --cyan-light: #0A7DAF21;
      
      --red: #E1483E;
      --red-dark: #B43931;
      --red-light: #E1483E21;
      
      --green: #3DA774;
      --green-dark: #30855C;
      --green-light: #3da77421;
      
      --yellow: #FFB511;
      --yellow-dark: #CC900D;
      --yellow-light: #FFB51121;
    }
    
    //////////////////////////////////
    // Theme Map
    //////////////////////////////////
    
    :root {
      --root-bg: var(--gray-lighter);
      --root-color: var(--gray-darkest);
      --component-bg: var(--white);
      --component-border: var(--white);
      --component-trans: rgba(0,0,0, .1);
      &.theme {
        &--dark {
          --root-bg: var(--gray-darkest);
          --root-color: var(--gray-lighter);
          --component-bg: transparent;
          --component-border: var(--gray-darker);
          --component-trans: rgba(255, 255, 255, .1);
        }
      }
    }
    
    //////////////////////////////////
    // Color Mappings
    //////////////////////////////////
    
    $root-bg: var(--root-bg);
    $root-color: var(--root-color);
    $component-bg: var(--component-bg);
    $component-border: var(--component-border);
    $component-trans: var(--component-trans);
    
    $base: (
      darkest: var(--gray-darkest),
      darker: var(--gray-darker),
      dark: var(--gray-dark),
      default: var(--gray),
      alt: var(--gray-alt),
      light: var(--gray-light),
      lighter: var(--gray-lighter),
      lightest: var(--gray-lightest)
    );
    
    $blue: (
      default: var(--blue),
      dark: var(--blue-dark),
      light: var(--blue-light)
    );
    
    $info: (
      default: var(--cyan),
      dark: var(--cyan-dark),
      light: var(--cyan-light)
    );
    
    $danger: (
      default: var(--red),
      dark: var(--red-dark),
      light: var(--red-light)
    );
    
    $success: (
      default: var(--green),
      dark: var(--green-dark),
      light: var(--green-light)
    );
    
    $warning: (
      default: var(--yellow),
      dark: var(--yellow-dark),
      light: var(--yellow-light)
    );
    
    $default: (
      default: var(--gray),
      dark: var(--gray-darker),
      light: var(--gray-lighter)
    );
    
    @function color($map, $color: default) {
      @if(map-get($map, $color)) {
          @return map-get($map, $color);
      }
      @else {
        @warn 'This color does not exist';
      }
    }
    
    $states: (
      primary: color($blue),
      info: color($info),
      danger: color($danger),
      success: color($success),
      warning: color($warning),
      default: color($default)
    );
    
    //////////////////////////////////
    // Typography
    //////////////////////////////////
    
    $font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    
    $spacing-unit: .8rem;
    
    $type-sizes: (
      h1: 								5.4rem,
      h2: 								3.6rem,
      h3: 								2.4rem,
      h4: 								2.0rem,
      h5: 								1.8rem,
      h6: 								1.6rem,
      p-lead:					2.0rem,
      p-small: 			1.4rem,
      p: 									1.6rem,
      small: 					1.4rem,
      small-caps: 1.1rem
    );
    
    $type-sizes-mobile: (
      h1: 								4.8rem,
      h2: 								3.2rem,
      h3: 								2.2rem,
      h4: 								1.8rem,
      h5: 								1.6rem,
      h6: 								1.4rem,
      p-lead:					1.8rem,
      p-small: 			1.4rem,
      p: 									1.6rem,
      small: 					1.4rem,
      small-caps: 1.1rem
    );
    
    @function type-size($key:p) {
      @if(map-get($type-sizes, $key)) {
        @return map-get($type-sizes, $key)
      }
      @else {
        @warn 'The size you entered does not exist'
      }
    }
    
    @function type-size-mobile($key:p) {
      @if(map-get($type-sizes-mobile, $key)) {
        @return map-get($type-sizes-mobile, $key)
      }
      @else {
        @warn 'The size you entered does not exist'
      }
    }
    
    //////////////////////////////////
    // Spacing
    //////////////////////////////////
    
    $spacing-unit: 8px;
    
    $spacing-sizes: (
      xxs: $spacing-unit/4,
      xs: $spacing-unit/2,
      sm: $spacing-unit,
      md: $spacing-unit*2,
      lg: $spacing-unit*4,
      xl: $spacing-unit*8,
      xxl: $spacing-unit*16
    );
    
    @function spacing($key:md) {
      @if(map-get($spacing-sizes, $key)) {
        @return map-get($spacing-sizes, $key)
      }
      @else {
        @warn 'The size you entered does not exist'
      }
    }
    
    //////////////////////////////////
    // Border Radius
    //////////////////////////////////
    
    $border-radius-sizes: (
      sm: .1rem,
      md: .2rem,
      lg: .4rem
    );
    
    @function border-radius($key:md) {
      @if(map-get($border-radius-sizes, $key)) {
        @return map-get($border-radius-sizes, $key)
      }
      @else {
        @warn 'The size you entered does not exist'
      }
    }
    
    //////////////////////////////////
    // Box Shadow
    //////////////////////////////////
    
    $box-shadow-sizes: (
      none: 0,
      xs: 0px 0px 0px 1px rgba(black, .1),
      sm: 0px 3px 6px -1px rgba(black, .1),
      md: 0px 5px 12px -2px rgba(black, .1),
      lg: 0px 12px 25px -4px rgba(black, .1),
      xl: 0px 18px 36px -6px rgba(black, .1)
    );
    
    @function box-shadow($key: md) {
      @if(map-get($box-shadow-sizes, $key)) {
        @return map-get($box-shadow-sizes, $key)
      }
      @else {
        @warn 'The size you entered does not exist'
      }
    }
    
    //////////////////////////////////
    // Rendered Styles
    //////////////////////////////////
    
    //////////////////////////////////
    // Base
    //////////////////////////////////
    
    html {
      box-sizing: border-box;
      font-size: 62.5%;
    }
    
    *, *:before, *:after {
      box-sizing: inehrit;
    }
    
    html, body {
      width: 100%;
      height: 100%;
    }
    
    body {
      background: $root-bg;
      color: $root-color;
      font-family: $font-family;
      font-size: type-size(p);
      @media screen and (max-width: 768px) {
        font-size: type-size-mobile(p);
      }
    }
    
    h1,h2,h3,h4,h5,h6 {
      font-weight: 700;
      line-height: 1.2;
      margin-top: 0;
      text-transform: uppercase;
    }
    
    @mixin headerType($letter-spacing, $margin-bottom, $map-size) {
      letter-spacing: $letter-spacing;
      margin-bottom: $margin-bottom;
      font-size: type-size($map-size);
      @media screen and (max-width: 768px) {
        font-size: type-size-mobile($map-size);
      }
    }
    
    $headers: (h1,h2,h3,h4,h5,h6);
    
    @each $header in $headers {
      #{$header} {
        @include headerType(.08rem, $spacing-unit*2, #{$header});
      }
    }
    
    input, select, textarea, button {
      font-family: inherit;
      color: inherit;
    }
    
    button {
      user-select: none;
    }
    
    .c-divider {
      width: 100%;
      border: .5px solid $component-trans;
      box-shadow: none;
      margin-top: spacing();
      margin-bottom: spacing();
      height: .5px;
    }
    
    //////////////////////////////////
    // Layout
    //////////////////////////////////
    
    .l-layout {
      width: 100%;
      max-width: 100%;
      margin: auto;
      padding: 0;
      @media screen and (min-width: 768px) {
        padding: 10vh spacing();
        max-width: 400px;
      }
    }
    
    //////////////////////////////////
    // Card
    //////////////////////////////////
    
    .c-card {
      background: red;
      border-radius: border-radius();
      background: $component-bg;
      border: 1px solid $component-border;
      box-shadow: box-shadow(md), box-shadow(lg);
      opacity: 0;
      position: relative;
      animation: fadeUp 240ms ease-out 120ms forwards;
      &__header, &__body {
        padding: spacing(md);
      }
      &__header {
        border-bottom: 1px solid $component-border;
        display: flex;
        flex-direction: column;
        position: relative;
      }
      &__body {
        //background: $component-trans;
      }
      &__title {
        margin-bottom: 0;
      }
    }
    
    //////////////////////////////////
    // Button
    //////////////////////////////////
    
    .c-button {
      border: 0;
      padding: spacing(sm)  spacing();
      cursor: pointer;
      background: $component-trans;
      border-radius: border-radius();
      position: relative;
      transition: all 100ms ease-out 0s;
      &:focus, &:active {
        outline: 0;
      }
      &:hover {
        background: $root-color;
        color: $root-bg;
      }
      &--success {
        background: color($success);
        color: var(--white);
        &:hover {
          background: color($success, dark);
          color: var(--white);
        }
      }
      &--full {
        display: block;
        width: 100%;
      }
      &--lg {
        padding: spacing(md);
        font-size: type-size(p-lead);
      }
      &--sm {
        padding: spacing(xs) spacing(sm);
        font-size: type-size(small);
      }
      &--secondary {
        border-color: transparent;
        background: transparent;
        &:hover {
          background: $component-trans;
          color: $root-color;
          opacity: .8;
        }
      }
    }
    
    #flightActions {
      display: none;
      background: $root-bg;
      z-index: 100;
      border-top: 1px solid $component-border;
      @media screen and (max-width: 768px) {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0px -5px 12px rgba(black, .1);
      }
    }
    
    .c-theme {
      $size: 32px;
      width: $size;
      height: $size;
      position: absolute;
      top: spacing(sm);
      right: spacing(sm);
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    //////////////////////////////////
    // Media
    //////////////////////////////////
    
    .c-media {
      display: flex;
      width: 100%;
      &__img {
        margin-right: spacing();
      }
      &__title {
        margin-bottom: spacing(sm);
      }
    }
    
    //////////////////////////////////
    // Avatar
    //////////////////////////////////
    
    .c-avatar {
      $size: 48px;
      width: $size;
      height: $size;
      background: $component-trans;
      display: inline-block;
      border-radius: border-radius();
      position: relative;
      &:after {
        content: attr(data-avatar);
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: type-size(h3);
        opacity: .6;
      }
      &--accent {
        background: $root-color;
        color: $root-bg;
      }
      &--sm {
        $size: 32px;
        width: $size;
        height: $size;
        &:after {
          font-size: type-size(h5);
        }
      }
    }
    
    //////////////////////////////////
    // Schedule
    //////////////////////////////////
    
    .c-schedule {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: spacing(sm);
      padding-bottom: spacing(sm);
      &__item {
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        padding: 0 spacing();
      }
      &__button {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        margin-right: 0;
        width: 72px;
        background: color($info, light);
        color: color($info);
        border-radius: 0;
        &:after {
          font-size: type-size(small);
          opacity: 1;
        }
      }
      &--active {
        background: color($success, light);
        outline: 1px solid color($success);
        color: color($success);
        .c-schedule__button {
          background: color($success);
        color: var(--white);
        }
      }
    }
    
    .c-plane {
      color: color($base);
      position: relative;
      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: spacing(md);
        height:1px;
        background: currentColor;
        transform: translateY(-50%);
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
      &__icon {
        width: 32px;
        transform: rotate(90deg);
      }
    }
    
    //////////////////////////////////
    // List
    //////////////////////////////////
    
    .c-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      &__item {
        position: relative;
        &:not(:last-of-type) {
          border-bottom: 1px solid $component-trans;
        }
        &:first-of-type {
          border-top: 1px solid $component-trans;
        }
      }
      &__link {
        padding: (spacing(sm) + spacing(xs)) spacing(md);
        cursor: pointer;
        width: 100%;
        border: 0;
        background: transparent;
        text-align: left;
        transition: all 240ms ease-out 0s;
        &:hover, &:active {
          padding-left: spacing(md) + spacing(sm);
          background: $component-trans;
          .c-schedule__button {
            background: color($success);
            color: var(--white);
          }
        }
        &:active, &:focus {
          outline: 3px solid $component-trans;
        }
      }
    }
    
    //////////////////////////////////
    // Table
    //////////////////////////////////
    
    .c-table {
      width: 100%;
      border-spacing: 0;
      td,th {
        text-align: left;
      }
    }
    
    //////////////////////////////////
    // Toggle
    //////////////////////////////////
    
    .c-toggle {
      $color: color($info);
      display: inline-flex;
      border: 1px solid $color;
      border-radius: border-radius(lg);
      &__btn {
        background: transparent;
        border: 0;
        color: $color;
        padding: spacing(xs);
        min-width: 40px;
        font-size: type-size(small);
        cursor: pointer;
        letter-spacing: .05rem;
        &:focus, &:active {
          outline: 0;
        }
        &:first-of-type {
          border-top-left-radius: border-radius(lg);
          border-bottom-left-radius: border-radius(lg);
        }
        &--active {
          background: $color;
          color: var(--white);
        }
      }
    }
    
    //////////////////////////////////
    // Utilities
    //////////////////////////////////
    
    @each $key, $val in $states {
      .u-text--#{$key} {
        color: $val !important;
      }
      .u-bg--#{$key} {
        background: $val !important;
      }
    }
    
    .u-text--white {
      color: var(--white) !important;
    }
    
    .u-bg--white {
      color: var(--white) !important;
    }
    
    @each $key,$val in $base {
      .u-text--b-#{$key} {
        color: $val !important;
      }
      .u-bg--b-#{$key} {
        background: $val !important;
      }
    }
    
    //////////////////////////////////////////////
    // Text Utilities
    //////////////////////////////////////////////
    
    .u-text--center {
      text-align: center !important;
    }
    
    .u-text--left {
      text-align: left !important;
    }
    
    .u-text--right {
      text-align: right !important;
    }
    
    //////////////////////////////////////////////
    // Spacing Utilities
    //////////////////////////////////////////////
    
    $directions: (
      l: left,
      r: right,
      t: top,
      b: bottom
    );
    
    @each $key,$val in $spacing-sizes {
      @each $label,$direction in $directions {
        .u-padding-#{$label}--#{$key} {
          padding-#{$direction}: $val !important;
        }
        .u-margin-#{$label}--#{$key} {
          margin-#{$direction}: $val !important;
        }
      }
      
      .u-padding--#{$key} {
        padding: $val !important;
      }
    }
    
    .u-margin-x--auto {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    
    .u-margin-y--auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    
    //////////////////////////////////////////////
    // Border Utilities
    //////////////////////////////////////////////
    
    .u-border {
      border-width: 1px;
      border-style: solid;
    }
    
    @each $key, $val in $states {
      .u-border--#{$key} {
        border-color: $val !important;
      }
    }
    
    @each $key, $val in $border-radius-sizes {
      .u-rounded--#{$key} {
        border-radius: $val !important;
      }
    }
    
    //////////////////////////////////////////////
    // Animation
    //////////////////////////////////////////////
    
    @keyframes fadeUp {
      from {
        opacity: 0;
        top: spacing(md);
      }
      to {
        opacity: 1;
        top: 0;
      }
    }
    </style> 
     
    mixin themeBtn
	button.c-button.c-button--secondary.c-theme
		svg(xmlns='http://www.w3.org/2000/svg' width="20" height="20" viewbox='0 0 32 32' fill="currentColor")
			path(d='M 15 3 L 15 8 L 17 8 L 17 3 L 15 3 z M 7.5 6.09375 L 6.09375 7.5 L 9.625 11.0625 L 11.0625 9.625 L 7.5 6.09375 z M 24.5 6.09375 L 20.9375 9.625 L 22.375 11.0625 L 25.90625 7.5 L 24.5 6.09375 z M 16 9 C 12.145852 9 9 12.145852 9 16 C 9 19.854148 12.145852 23 16 23 C 19.854148 23 23 19.854148 23 16 C 23 12.145852 19.854148 9 16 9 z M 16 11 C 18.773268 11 21 13.226732 21 16 C 21 18.773268 18.773268 21 16 21 C 13.226732 21 11 18.773268 11 16 C 11 13.226732 13.226732 11 16 11 z M 3 15 L 3 17 L 8 17 L 8 15 L 3 15 z M 24 15 L 24 17 L 29 17 L 29 15 L 24 15 z M 9.625 20.9375 L 6.09375 24.5 L 7.5 25.90625 L 11.0625 22.375 L 9.625 20.9375 z M 22.375 20.9375 L 20.9375 22.375 L 24.5 25.90625 L 25.90625 24.5 L 22.375 20.9375 z M 15 24 L 15 29 L 17 29 L 17 24 L 15 24 z')

.l-layout
	.c-card#selectFlights
		.c-card__header
			.c-media
				.c-media__img.c-avatar.c-avatar--accent(data-avatar="k")
				.c-media__content
					h4.c-media__title Kimi Raikkonen
					span.u-text--b-default Travel Points: 
					span.u-text--success 27,900 points
			+themeBtn
		.c-card__body.u-padding-b--xs
			.c-schedule
				.c-schedule__item
					small.u-text--b-default From
					strong.u-text--info TPA
				.c-schedule__item.c-plane
					svg.c-plane__icon(xmlns='http://www.w3.org/2000/svg' viewbox='0 0 24 24' fill="currentColor")
						path(d='M10.18 9')
						path(d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z')
				.c-schedule__item
					small.u-text--b-default To
					strong.u-text--info SFO
				.c-schedule__item
					.c-toggle
						button.c-toggle__btn.c-toggle__btn--active(data-payment="dollars") $
						button.c-toggle__btn(data-payment="points") PTS
		.c-divider.u-margin-b--xs
		.c-card__body.u-text--center.u-padding-t--xs.u-padding-b--sm
			small
				span June 1, 2019 
				span.u-text--b-default to 
				span Jun 5, 2019
		ul.c-list#flightList
		.c-card__body#flightActions(style="display: none;")
			button.c-button.c-button--success.c-button--full.c-button--lg#confirm Confirm Flight &rarr;
		
	.c-card#reviewFlights(style="display: none;")
		.c-card__body
			+themeBtn
			button.c-button.c-button--secondary.c-button--sm#back &larr; Select Flight
			h3.u-margin-b--xs.u-margin-t--md TPA to SFO
			small.u-text--b-default June 1 to June 5
			.c-divider
			.u-text--b-default.u-margin-b--sm
				small Flight Summary
			.u-border.u-border.u-border--info.u-padding--md.u-rounded--lg.u-margin-b--md
				.u-margin-b--xs.u-text--info
					small Departs
				table.c-table
					tbody
						tr
							td Tampa International Airport
							th.u-text--right#departureTime 11:45 AM
			.u-border.u-border.u-border--success.u-padding--md.u-rounded--lg.u-margin-b--md
				.u-margin-b--xs.u-text--success
					small Arrives
				table.c-table
					tbody
						tr
							td San Francisco International Airport
							th.u-text--right#arrivalTime 4:50 PM
			.c-divider
			table.c-table
				thead
					tr
						td.u-padding-b--sm
							small.u-text--b-default Checkout
						td.u-text--right.u-padding-b--sm
							small.u-text--success.u-margin-r--xs (points available) 27,000
				tbody
					tr
						td.u-padding-b--sm Cost
						td.u-text--right.u-padding-b--sm
							span#activeCost -20,000
					tr
						td.u-padding-b--sm Tax
						td.u-text--right.u-padding-b--sm -$0.00
			.c-divider
			.u-text--right
				h2.u-margin-b--md#total $350.00
			button.c-button.c-button--lg.c-button--full.c-button--success Purchase Flight
				
  
    


    <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script>
    <script>
    console.clear();

    const themeButtons = document.querySelectorAll('.c-theme');
    
    themeButtons.forEach(theme => {
      theme.addEventListener('click', () => {
        document.documentElement.classList.toggle('theme--dark');
      })
    })
    
    const flights = [
      {
        departTime: '11:45 AM',
        arriveTime: '4:50 PM',
        points: '36,750',
        flightTime: '8h 5m',
        dollars: '$527'
      }, {
        departTime: '12:00 PM',
        arriveTime: '6:45 PM',
        points: '32,490',
        flightTime: '9h 45min',
        dollars: '$532'
      }, {
        departTime: '12:00 PM',
        arriveTime: '7:50 PM',
        points: '30,620',
        flightTime: '10h 50m',
        dollars: '$450'
      }, {
        departTime: '12:10 PM',
        arriveTime: '7:50 PM',
        points: '25,033',
        flightTime: '10h 40m',
        dollars: '$373'
      }
    ];
    
    const renderPoints = () => {
      flights.forEach(flight => {
        const newFlight = document.createElement('li');
        newFlight.classList = 'c-list__item';
        newFlight.setAttribute('data-price', '${flight.dollars}');
        newFlight.setAttribute('data-departure', '${flight.departTime}');
        newFlight.setAttribute('data-arrival', '${flight.arriveTime}');
        newFlight.setAttribute('data-points', '${flight.points}');
        newFlight.setAttribute('data-time', '${flight.flightTime}');
        newFlight.setAttribute('data-payment', 'points');
        newFlight.innerHTML = '
          <button class="c-list__link c-media">
            <div class="c-media__content">
              <div class="c-schedule">
                <div class="c-schedule__item"><small class="u-text--b-default">Departs</small><strong>${flight.departTime}</strong></div>
                <div class="c-schedule__item c-plane">
                  <svg class="c-plane__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor">
                    <path d="M10.18 9"></path>
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
                  </svg>
                </div>
                <div class="c-schedule__item"><small class="u-text--b-default">Arrives</small><strong>${flight.arriveTime}</strong></div>
              </div>
            <div class="c-media__img c-avatar c-schedule__button" data-avatar="${flight.points}"></div>
          </div>
          </button>
        ';
        
        newFlight.addEventListener('click', () => {
          if(!newFlight.classList.contains('c-schedule--active')) {
            if(newFlight.parentNode.querySelector('.c-schedule--active')) {
              newFlight.parentNode.querySelector('.c-schedule--active')
                .classList.remove('c-schedule--active')
            }
            newFlight.classList.add('c-schedule--active');
            renderActiveData();
            document.getElementById('flightActions').style.display = 'block';
          } else {
            if(newFlight.classList.contains('c-schedule--active')) {
              newFlight.classList.remove('c-schedule--active');
              document.getElementById('flightActions').style.display = 'none';
            }
          }
        })
        
        document.getElementById('flightList').appendChild(newFlight);
      })
    };
    
    const renderDollars = () => {
      flights.forEach(flight => {
        const newFlight = document.createElement('li');
        newFlight.classList = 'c-list__item';
        newFlight.setAttribute('data-price', '${flight.dollars}');
        newFlight.setAttribute('data-departure', '${flight.departTime}');
        newFlight.setAttribute('data-arrival', '${flight.arriveTime}');
        newFlight.setAttribute('data-points', '${flight.points}');
        newFlight.setAttribute('data-time', '${flight.flightTime}');
        newFlight.setAttribute('data-payment', 'dollars');
        newFlight.innerHTML = '
          <button class="c-list__link c-media">
            <div class="c-media__content">
              <div class="c-schedule">
                <div class="c-schedule__item"><small class="u-text--b-default">Departs</small><strong>${flight.departTime}</strong></div>
                <div class="c-schedule__item c-plane">
                  <svg class="c-plane__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor">
                    <path d="M10.18 9"></path>
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
                  </svg>
                </div>
                <div class="c-schedule__item"><small class="u-text--b-default">Arrives</small><strong>${flight.arriveTime}</strong></div>
              </div>
            <div class="c-media__img c-avatar c-schedule__button" data-avatar="${flight.dollars}"></div>
          </div>
          </button>
          ';
        
        newFlight.addEventListener('click', () => {
          if(!newFlight.classList.contains('c-schedule--active')) {
            if(newFlight.parentNode.querySelector('.c-schedule--active')) {
              newFlight.parentNode.querySelector('.c-schedule--active')
                .classList.remove('c-schedule--active')
            }
            newFlight.classList.add('c-schedule--active');
            renderActiveData();
            document.getElementById('flightActions').style.display = 'block';
          } else {
            if(newFlight.classList.contains('c-schedule--active')) {
              newFlight.classList.remove('c-schedule--active');
              document.getElementById('flightActions').style.display = 'none';
            }
          }
        })
        
        document.getElementById('flightList').appendChild(newFlight);
      })
    };
    
    renderDollars();
    
    const toggleBtns = document.querySelectorAll('.c-toggle__btn');
    
    toggleBtns.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const paymentType = toggle.dataset.payment;
        document.getElementById('flightActions').style.display = 'none';
        if(!toggle.classList.contains('c-toggle__btn--active')) {
          toggle.parentNode.querySelector('.c-toggle__btn--active')
            .classList.remove('c-toggle__btn--active');
          toggle.classList.add('c-toggle__btn--active');
          if(paymentType == 'dollars') {
            document.getElementById('flightList').innerHTML = '';
            renderDollars();
          } else {
            document.getElementById('flightList').innerHTML = '';
            renderPoints();
          }
        } else {
          
        }
      })
    })
    
    const selectContainer = document.getElementById('selectFlights');
    const reviewContainer = document.getElementById('reviewFlights');
    
    const confirmBtn = document.getElementById('confirm');
    const backBtn = document.getElementById('back');
    
    const renderActiveData = () => {
      const activeItem = document.querySelector('.c-schedule--active');
      const departureTime = activeItem.dataset.departure;
      const arrivalTime = activeItem.dataset.arrival;
      const pointsVal = activeItem.dataset.points;
      const dollarVal = activeItem.dataset.price;
      const flightTime = activeItem.dataset.time;
      const payment = activeItem.dataset.payment;
      
      let activeValues = [
        departureTime,
        arrivalTime,
        pointsVal,
        dollarVal,
        flightTime
      ];
      
      console.log(payment)
      
      if(payment == 'points') {
        document.getElementById('activeCost').innerHTML = ' <small class="u-text--b-default">(points)</small> -' + activeValues[2];
        document.getElementById('total').innerHTML = activeValues[2];
      } else {
        document.getElementById('activeCost').innerHTML = '-' + activeValues[3] + '.00';
        document.getElementById('total').innerHTML = activeValues[3] + '.00';
      }
      
      document.getElementById('departureTime').innerHTML = activeValues[0];
      document.getElementById('arrivalTime').innerHTML = activeValues[1];
    }
    
    confirmBtn.addEventListener('click', () => {
      selectContainer.style.display = 'none';
      reviewContainer.style.display = 'block';
    })
    
    backBtn.addEventListener('click', () => {
      selectContainer.style.display = 'block';
      reviewContainer.style.display = 'none';
    })
    
    
      </script>
  
	`;

  class Box extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      this.addEventListener("click", event => {
        var event = new Event("onClick");
        this.dispatchEvent(event);
      });
      this._props = {};
    }

    onCustomWidgetBeforeUpdate(changedProperties) {
      this._props = { ...this._props, ...changedProperties };
    }

    onCustomWidgetAfterUpdate(changedProperties) {
      if ("color" in changedProperties) {
        this.style["background-color"] = changedProperties["color"];
      }

      if ("opacity" in changedProperties) {
        this.style["opacity"] = changedProperties["opacity"];
      }
    }
  }

  customElements.define("com-sample-box", Box);
})();
