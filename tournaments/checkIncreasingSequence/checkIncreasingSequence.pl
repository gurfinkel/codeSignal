#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub checkIncreasingSequence {
    my ($seq) = @_;

    for (my $i = 1; @$seq > $i; ++$i) {
        if ($$seq[$i] <= $$seq[$i - 1]) {
            return 0;
        }
    }

    return 1;
}
