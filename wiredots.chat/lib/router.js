FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"wiredots_chatIndex"});
    }
});