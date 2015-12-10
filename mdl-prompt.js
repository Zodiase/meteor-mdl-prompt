var tplname = 'zodiase_mdl_prompt',
    tpl = Template[tplname],
    _triggeringEventName = '__mdl__prompt',
    _showPrompt = new ReactiveVar(false),
    _promptTitle = new ReactiveVar(''),
    _promptMessage = new ReactiveVar(''),
    _showPromptAction_yes = new ReactiveVar(false),
    _promptActionTitle_yes = new ReactiveVar(''),
    _promptActionCallback_yes = new ReactiveVar(null),
    _showPromptAction_no = new ReactiveVar(false),
    _promptActionTitle_no = new ReactiveVar(''),
    _promptActionCallback_no = new ReactiveVar(null),
    
    onPrompt = function(event, options) {
      /**
        options: {
          title:   String
          message: String
          yes: {
            title: String
            action: Function
          }
          no: {
            title: String
            action: Function
          }
        }
       */
      _promptTitle.set(options.title);
      _promptMessage.set(options.message);
      if (options.yes) {
        _showPromptAction_yes.set(true);
        _promptActionTitle_yes.set(options.yes.title || 'Yes');
        _promptActionCallback_yes.set(options.yes.action || null);
      } else {
        _showPromptAction_yes.set(false);
      }
      if (options.no) {
        _showPromptAction_no.set(true);
        _promptActionTitle_no.set(options.no.title || 'No');
        _promptActionCallback_no.set(options.no.action || null);
      } else {
        _showPromptAction_no.set(false);
      }
      _showPrompt.set(true);
    },
    onTemplateCreated = function(tpl) {
      tpl = this;
      $(document.body).on(_triggeringEventName, onPrompt.bind(tpl));
    },
    onTemplateDestroyed = function(tpl) {
      tpl = this;
      $(document.body).off(_triggeringEventName);
    },
    templateHelpers = {
      'prompt': function() {
        return {
          'show': _showPrompt.get(),
          'title': _promptTitle.get(),
          'message': _promptMessage.get(),
          'yes': {
            'show': _showPromptAction_yes.get(),
            'title': _promptActionTitle_yes.get()
          },
          'no': {
            'show': _showPromptAction_no.get(),
            'title': _promptActionTitle_no.get()
          }
        };
      }
    },
    _killEvent = function(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    templateEvents = {
      'click .zodiase_mdl_prompt__clickTrap': _killEvent,
      'click .zodiase_mdl_prompt__modal, click .zodiase_mdl_prompt__modal .zodiase_mdl_prompt__action-no': function(event, tpl) {
        _killEvent(event);
        showPrompt = _showPrompt.get();
        if (!showPrompt) return;
        //else
        showAction = _showPromptAction_no.get();
        if (!showAction) return;
        //else
        action = _promptActionCallback_no.get();
        if (action) action();
        _showPrompt.set(false);
        return;
      },
      'click .zodiase_mdl_prompt__modal .zodiase_mdl_prompt__action-yes': function(event, tpl) {
        _killEvent(event);
        showPrompt = _showPrompt.get();
        if (!showPrompt) return;
        //else
        showAction = _showPromptAction_yes.get();
        if (!showAction) return;
        //else
        action = _promptActionCallback_yes.get();
        if (action) action();
        _showPrompt.set(false);
        return;
      }
    };

tpl.onCreated(onTemplateCreated);
tpl.onDestroyed(onTemplateDestroyed);
tpl.helpers(templateHelpers);
tpl.events(templateEvents);
