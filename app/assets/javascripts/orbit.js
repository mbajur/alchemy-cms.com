$(function() {
  $(document).foundation('orbit', {
    animation: 'fade',
    timer_speed: 5000,
    pause_on_hover: false,
    resume_on_mouseout: false,
    animation_speed: 300,
    stack_on_small: false,
    navigation_arrows: false,
    slide_number: false,
    container_class: 'orbit-container',
    stack_on_small_class: 'orbit-stack-on-small',
    next_class: 'orbit-next',
    prev_class: 'orbit-prev',
    timer_container_class: 'orbit-timer',
    timer_paused_class: 'paused',
    timer_progress_class: 'orbit-progress',
    slides_container_class: 'orbit-slides-container',
    bullets_container_class: 'orbit-bullets',
    bullets_active_class: 'active',
    slide_number_class: 'orbit-slide-number',
    caption_class: 'orbit-caption',
    active_slide_class: 'active',
    orbit_transition_class: 'orbit-transitioning',
    bullets: false,
    timer: true,
    next_on_click: false,
    variable_height: false,
    before_slide_change: function(){},
    after_slide_change: function(){}
  });
});
