from orator.migrations import Migration


class CreateChangesTable(Migration):

    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create('changes') as table:
            table.increments('id')
            table.boolean('needs_approval')\
                .default(True)\
                .comment('Indicates if assignment group approval is needed')
            table.boolean('is_complete')\
                .default(False)\
                .comment('Indicates if the change has been completed')
            table.string('summary')\
                .comment('Provide a brief summary of the change purpose')
            table.text('description')\
                .comment('Text description of what the change will achieve')
            table.datetime('change_schedule_start')\
                .comment('Scheduled UTC timestamp for change')
            table.datetime('change_schedule_complete')\
                .comment('Change completion UTC timestamp')
            table.soft_deletes().comment('Marks items as deleted')
            table.datetime('change_actual_start')\
                .comment('Actual start time of the change')
            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop('changes')
