(function ($) {
    $.fn.toggleSwitch = function () {
        return this.each(function () {
            const $toggleSwitch = $(this);
            const $slider = $toggleSwitch.find('.slider');
            const $modeIcon = $toggleSwitch.find('.mode-icon');
            const $sunIcon = $toggleSwitch.find('.sun-icon');
            const $moonIcon = $toggleSwitch.find('.moon-icon');

            const updateUI = () => {
                const isChecked = $toggleSwitch.find('input[type="checkbox"]').prop('checked');
                const backgroundColor = isChecked ? '#f5f382' : '#3d78c5';
                const bodyColor = isChecked ? '#ffffff' : '#050505';
                const iconPosition = isChecked ? '26px' : '0';

                $slider.css('background-color', backgroundColor);
                $('body').css('background-color', bodyColor);
                $modeIcon.css('transform', `translateX(${iconPosition})`);
                $sunIcon.toggleClass('visible', isChecked);
                $moonIcon.toggleClass('visible', !isChecked);
            };

            updateUI(); // Inicialização

            $toggleSwitch.find('input[type="checkbox"]').on('change', updateUI);
            $toggleSwitch.find('input[type="checkbox"]').on('keydown', function (event) {
                if (event.key === 'Enter') {
                    $toggleSwitch.find('input[type="checkbox"]').trigger('change');
                }
            });
        });
    };
}(jQuery));

$('.toggle-switch').toggleSwitch(); // Inicialize o plugin nas classes 'toggle-switch' em seu HTML

