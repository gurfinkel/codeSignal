#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub metroCard {
    my ($lastNumberOfDays) = @_;

    return (28 == $lastNumberOfDays || 30 == $lastNumberOfDays) ? [31] : [28, 30, 31];
}
