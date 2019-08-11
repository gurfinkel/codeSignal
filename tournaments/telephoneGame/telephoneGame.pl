#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub telephoneGame {
    my ($messages) = @_;

    for (my $i = 1; @$messages > $i; ++$i) {
        unless ($$messages[$i] eq $$messages[$i - 1]) {
            return $i;
        }
    }

    return -1;
}
